import { Injectable } from "@angular/core";
import { AlertService } from "../../services/alert.service";

@Injectable({
  providedIn: "root"
})
export class AlertMessageLinkService {
  customLinkMessages: string;
  passwordLinkMessage: string;
  linkAddressMessage: string;
  utmMedium: string;
  utmSource: string;
  utmCampaign: string;

  // Link address messages
  enterAddress: string = "ابتدا ادرس سایت را وارد کنید!";
  enterCorrectAddress: string = "لطفا ادرس صحیح را وارد کنید!";
  // Custom link messages
  moreThanSomeCharacterForCustom: string = "حداقل 5 کاراکتر";
  shortenIsDuplicate: string = "قبلا ثبت شده است";
  // password link messages
  moreThanSomeCharacterForPass: string = "حداقل 3 کاراکتر";
  passwordIsIncorrect: string = "رمز عبور صحیح نمی باشد!";
  //
  userIsUnauthorized: string = "!کاربر غیر مجاز است";
  // UTM
  mediumIsRequierd: string = "فیلد medium نباید خالی باشد";
  sourceIsRequierd: string = "فیلد source نباید خالی باشد";
  campaignIsRequierd: string = "فیلد campaign نباید خالی باشد";

  constructor(private alertService: AlertService) {}

  // Custom link methods
  addMoreThanSomeCharacterForCustom() {
    this.customLinkMessages = this.moreThanSomeCharacterForCustom;
  }
  addShortenIsDuplicate() {
    this.customLinkMessages = this.shortenIsDuplicate;
  }
  deleteCustomLinkMessage() {
    this.customLinkMessages = "";
  }

  // Password link methods
  addMoreThanSomeCharacterForPass() {
    this.passwordLinkMessage = this.moreThanSomeCharacterForPass;
  }
  deletePasswordLinkMesage() {
    this.passwordLinkMessage = "";
  }

  // UTM
  addMediumIsRequierd() {
    this.utmMedium = this.mediumIsRequierd;
  }
  deleteMediumIsRequierd() {
    this.utmMedium = "";
  }
  addSourceIsRequierd() {
    this.utmSource = this.sourceIsRequierd;
  }
  deleteSourceIsRequierd() {
    this.utmSource = "";
  }
  addCampaignIsRequierd() {
    this.utmCampaign = this.campaignIsRequierd;
  }
  deleteCampaignIsRequierd() {
    this.utmCampaign = "";
  }

  clearAllMessages() {
    this.customLinkMessages = "";
    this.passwordLinkMessage = "";
  }

  // Alerts
  alertCustomLink() {
    this.alertService.alert(this.customLinkMessages);
  }
  alertPasswordLink() {
    this.alertService.alert(this.passwordLinkMessage);
  }
  alertIncorrectPasswordLink() {
    this.alertService.alert(this.passwordIsIncorrect);
  }
  alertAddressLink() {
    this.alertService.alert(this.enterAddress);
  }
  alertCorrectAddressLink() {
    this.alertService.alert(this.enterCorrectAddress);
  }
  alertUserIsUnauthorized() {
    this.alertService.alert(this.userIsUnauthorized);
  }
  alertMediumIsrequired() {
    this.alertService.alert(this.utmMedium);
  }
  alertSourceIsrequired() {
    this.alertService.alert(this.utmSource);
  }
  alertCampaignIsrequired() {
    this.alertService.alert(this.utmCampaign);
  }
}
