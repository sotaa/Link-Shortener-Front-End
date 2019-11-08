import { ILink } from "./../../../models/link.interface";
import { Component, OnInit, Input } from "@angular/core";
import { LinkService } from "../../services/link.service";
import { Subscription } from "rxjs";
import { Router, NavigationEnd } from "@angular/router";
import { AlertMessageLinkService } from "../../services/alert-message-link.service";

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

  constructor(
    private linkService: LinkService,
    private router: Router,
    private alertMessageLink: AlertMessageLinkService
  ) {
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
      if (this.link.password) {
        this.disabled = false;
        this.checked = true;
        this.link.password = undefined;
      }
    } else this.selectedPassword;
  }

  checkPassword() {
    if (this.selectedPassword.length < this.minimumLength) {
      this.link.password = undefined;
      return (
        (this.message = this.alertMessageLink.moreThanSomeCharacterForPass),
        this.alertMessageLink.addMoreThanSomeCharacterForPass()
      );
    } else {
      this.link.password = this.selectedPassword;
      this.message = "";
      this.alertMessageLink.deletePasswordLinkMesage();
    }
  }
  toggleCheckbox() {
    this.checked = !this.checked;
    if (this.checked) {
      this.link.password = undefined;
      this.disabled = false;
    } else {
      this.message = "";
      this.alertMessageLink.deletePasswordLinkMesage();
      this.selectedPassword = "";
      this.link.password = "";
      this.disabled = true;
    }
  }
}
