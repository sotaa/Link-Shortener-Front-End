import { Component, OnInit, OnDestroy } from "@angular/core";
import { AlertMessageLinkService } from "../../services/alert-message-link.service";
import { PremiumFeature } from "../premium-feature.class";
import { NavigationEnd, Router } from "@angular/router";
import { LinkService } from "../../services/link.service";
import * as queryString from "query-string";

@Component({
  selector: "app-utm-form",
  templateUrl: "./utm-form.component.html",
  styleUrls: ["./utm-form.component.css"]
})
export class UtmFormComponent extends PremiumFeature
  implements OnInit, OnDestroy {
  utmParameters;
  navigationSubscription;

  constructor(
    private linkService: LinkService,
    private router: Router,
    private alertMessageLink: AlertMessageLinkService
  ) {
    super();
    this.utmParameters = new Set();
    this.utmParameters.utm_medium = "";
    this.utmParameters.utm_source = "";
    this.utmParameters.utm_campaign = "";
    this.utmParameters.utm_term = "";
    this.utmParameters.utm_content = "";
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.initValues();
      }
    });
  }

  ngOnInit() {
    this.initValues();
    this.linkService.resetCheckBox.subscribe(() => {
      this.disable();
    });
  }

  initValues() {
    this.linkService.utm.subscribe(() => {
      this.parseUtmFromLinkAddressToFillInputs();
    });
    if (this.editMode) {
      this.parseUtmFromLinkAddressToFillInputs();
    }
  }

  addUtmToLink() {
    this.AddStringifyUtmTOLinkAddress();
    // Handle alert mesages
    if (!this.utmParameters.utm_medium) {
      this.alertMessageLink.addMediumIsRequierd();
    } else {
      this.alertMessageLink.deleteMediumIsRequierd();
    }
    if (!this.utmParameters.utm_source) {
      this.alertMessageLink.addSourceIsRequierd();
    } else {
      this.alertMessageLink.deleteSourceIsRequierd();
    }
    if (!this.utmParameters.utm_campaign) {
      this.alertMessageLink.addCampaignIsRequierd();
    } else {
      this.alertMessageLink.deleteCampaignIsRequierd();
    }
  }

  parseUtmFromLinkAddressToFillInputs() {
    if (this.link.address && this.link.address.includes("utm_medium")) {
      this.utmParameters = queryString.parse(this.link.address.split("?")[1]);
      this.enable();
    } else {
      this.removeUtm();
      this.disable();
    }
  }

  AddStringifyUtmTOLinkAddress() {
    if (this.link.address) {
      if (!this.utmParameters.utm_medium) delete this.utmParameters.utm_medium;
      if (!this.utmParameters.utm_source) delete this.utmParameters.utm_source;
      if (!this.utmParameters.utm_campaign)
        delete this.utmParameters.utm_campaign;
      if (!this.utmParameters.utm_term) delete this.utmParameters.utm_term;
      if (!this.utmParameters.utm_content)
        delete this.utmParameters.utm_content;
      this.link.address = this.link.address
        .split("?")[0]
        .concat("?", queryString.stringify(this.utmParameters));
    }
  }

  removeUtm() {
    delete this.utmParameters.utm_medium;
    delete this.utmParameters.utm_source;
    delete this.utmParameters.utm_campaign;
    delete this.utmParameters.utm_term;
    delete this.utmParameters.utm_content;
  }

  removeAlertMessages() {
    this.alertMessageLink.deleteMediumIsRequierd();
    this.alertMessageLink.deleteSourceIsRequierd();
    this.alertMessageLink.deleteCampaignIsRequierd();
  }

  toggleCheckbox() {
    if (!this.isEnable) {
      this.enable();
    } else {
      this.removeAlertMessages();
      this.removeUtm();
      this.AddStringifyUtmTOLinkAddress();
      this.disable();
    }
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}
