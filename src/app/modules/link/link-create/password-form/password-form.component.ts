import { ILink } from "./../../../models/link.interface";
import { Component, OnInit, Input } from "@angular/core";
import { LinkService } from "../../services/link.service";
import { Subscription } from "rxjs";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-password-form",
  templateUrl: "./password-form.component.html",
  styleUrls: ["./password-form.component.css"]
})
export class PasswordFormComponent implements OnInit {
  @Input() link: ILink;
  @Input() isExpired: boolean;
  @Input() editMode: boolean;
  selectedPassword: string;
  minimumLength: number;
  message: string = "";
  checked;
  disabled;
  navigationSubscription: Subscription;

  constructor(private linkService: LinkService, private router: Router) {
    this.minimumLength = 3;
    this.selectedPassword = "";
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.initValues();
      }
    });
  }

  ngOnInit() {
    this.initValues();
    this.linkService.resetCheckBox.subscribe(() => {
      this.checked = false;
      this.disabled = true;
      this.selectedPassword = "";
      this.message = "";
    });
  }

  initValues() {
    this.disabled = true;
    this.checked = false;
    if (this.editMode) {
      this.disabled = false;
      this.checked = true;
      this.selectedPassword = this.link.password;
    } else this.selectedPassword;
  }

  // save() {
  //   const ck = document.getElementById("savePass") as HTMLInputElement;
  //   if (ck.checked === true) {
  //     this.link.password = this.selectedPassword;
  //     alert("تغییرات پسورد اعمال شد");
  //   } else {
  //     this.link.password = "";
  //   }
  // }
  checkPassword() {
    if (this.selectedPassword.length < this.minimumLength) {
      this.link.password = undefined;
      return (
        (this.message = "پسورد: حداقل 3 کاراکتر"),
        (this.linkService.alertMessagePassword = this.message)
      );
    } else {
      this.link.password = this.selectedPassword;
      this.message = "";
      this.linkService.alertMessagePassword = this.message;
    }
  }
  toggleCheckbox() {
    this.checked = !this.checked;
    if (this.checked) {
      this.disabled = false;
    } else {
      this.message = "";
      this.linkService.alertMessagePassword = this.message;
      this.selectedPassword = "";
      this.link.password = undefined;
      this.disabled = true;
    }
  }
}
