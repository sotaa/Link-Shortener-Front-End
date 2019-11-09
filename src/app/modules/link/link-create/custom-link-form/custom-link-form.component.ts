import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from "@angular/core";
import { LinkService } from "../../services/link.service";
import { ILink } from "src/app/modules/models/link.interface";
import { Subscription } from "rxjs";
import { Router, NavigationEnd } from "@angular/router";
import { AlertMessageLinkService } from "../../services/alert-message-link.service";
import { PremiumFeature } from "../premium-feature.class";

@Component({
  selector: "app-custom-link-form",
  templateUrl: "./custom-link-form.component.html",
  styleUrls: ["./custom-link-form.component.css"]
})
export class CustomLinkFormComponent extends PremiumFeature implements OnInit, OnDestroy {
  @Input() link: ILink;
  @Input() editMode: boolean;
  selectedShorten: string;
  hostAddress: string;
  shortenIsValid: boolean;
  message: string = "";
  minimumLength: number;
  // checked;
  // disabled;
  value;
  navigationSubscription: Subscription;


  constructor(
    private linkService: LinkService,
    private router: Router,
    private alertMessageLink: AlertMessageLinkService
  ) {
    super();
    this.shortenIsValid = undefined;
    this.minimumLength = 5;
    this.selectedShorten = "";
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.initValues();
      }
    });
  }

  ngOnInit() {
    this.initValues();
    this.linkService.resetCheckBox.subscribe(() => {
      // this.checked = false;
      // this.disabled = true;
      this.selectedShorten = "";
      this.message = "";
    });
  }

  initValues() {
    // this.disabled = true;
    // this.checked = false;
    if (this.editMode) {
      // this.disabled = false;
      // this.checked = true;
      this.selectedShorten = this.link.shorten;
    } else this.selectedShorten;
  }

  checkShorten() {
    if (this.selectedShorten.length < this.minimumLength) {
      this.link.shorten = undefined;
      return (
        (this.message = this.alertMessageLink.moreThanSomeCharacterForCustom),
        this.alertMessageLink.addMoreThanSomeCharacterForCustom()
      );
    } else {
      (this.message = ""), this.alertMessageLink.deleteCustomLinkMessage();
    }
    this.linkService.shortenIsExists(this.selectedShorten).subscribe(res => {
      this.handleExistentResult(res);
    });
    this;
  }

  handleExistentResult(isExists: boolean) {
    this.message = "";
    if (isExists) {
      this.message = this.alertMessageLink.shortenIsDuplicate;
      this.alertMessageLink.addShortenIsDuplicate();
      this.link.shorten = undefined;
    } else {
      this.message = "";
      this.alertMessageLink.deleteCustomLinkMessage();
      this.link.shorten = this.selectedShorten;
    }
  }

  toggleCheckbox(e) {
    e.preventDefault();
    if (!this.isEnable) {
      this.enable();
    } else {
      this.message = "";
      this.alertMessageLink.deleteCustomLinkMessage();
      this.selectedShorten = "";
      this.link.shorten = undefined;
      this.disable();
    }
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}
