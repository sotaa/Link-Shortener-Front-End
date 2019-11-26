import { Injectable } from "@angular/core";
import { AlertService } from "../../services/alert.service";

@Injectable({
  providedIn: "root"
})
export class AlertMessageLinkService {
  customLinkMessages: string;
  passwordLinkMessage: string;
  linkAddressMessage: string;

  // Link address messages
  enterAddress: string = "لطفا ادرس سایت را وارد کنید!";
  enterCorrectAddress: string = "لطفا ادرس صحیح را وارد کنید!";
  // Custom link messages
  moreThanSomeCharacterForCustom: string = "لینک کوتاه دلخواه: حداقل 5 کاراکتر";
  shortenIsDuplicate: string = "این لینک کوتاه دلخواه قبلا ثبت شده است";
  // password link messages
  moreThanSomeCharacterForPass: string = "پسورد: حداقل 3 کاراکتر";
  passwordIsIncorrect: string = "رمز عبور صحیح نمی باشد!";
  //
  userIsUnauthorized: string = "!کاربر غیر مجاز است";

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
}
