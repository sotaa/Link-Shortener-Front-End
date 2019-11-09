import { ILink } from "./../../../models/link.interface";
import { Component, OnInit, Input } from "@angular/core";
import { LinkService } from "../../services/link.service";
import { Subscription } from "rxjs";
import { Router, NavigationEnd } from "@angular/router";
import { AlertMessageLinkService } from "../../services/alert-message-link.service";
import { PremiumFeature } from "../premium-feature.class";

@Component({
  selector: "app-password-form",
  templateUrl: "./password-form.component.html",
  styleUrls: ["./password-form.component.css"]
})
export class PasswordFormComponent extends PremiumFeature implements OnInit {
  @Input() link: ILink;
  @Input() editMode: boolean;
  selectedPassword: string;
  minimumLength: number;
  message: string = "";
  // checked;
  // disabled;
  navigationSubscription: Subscription;

  constructor(
    private linkService: LinkService,
    private router: Router,
    private alertMessageLink: AlertMessageLinkService
  ) {
    super();
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
      this.isEnable = false;
      this.selectedPassword = "";
      this.message = "";
    });
  }

  initValues() {
    // this.disabled = true;
    // this.checked = false;
    if (this.editMode) {
      if (this.link.password) {
        // this.disabled = false;
        // this.checked = true;
        if (this.link.password) {
          this.isEnable = true;
        }
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
  toggleCheckbox(e) {
    if (!this.isEnable) {
      this.enable();
      if (!this.isEnable) return;
      this.link.password = undefined;
    } else {
      this.message = "";
      this.alertMessageLink.deletePasswordLinkMesage();
      this.selectedPassword = "";
      this.link.password = "";
      this.disable();
    }
  }
}
