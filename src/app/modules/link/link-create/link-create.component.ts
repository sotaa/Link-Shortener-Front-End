import { Component, OnInit, OnDestroy } from "@angular/core";

import { LinkService } from "../services/link.service";
import { ILink, Link } from "../../models/link.interface";
import { SystemMessagesService } from "../services/system-messages.service";
import { PremiumFeature } from "../../models/premium-feature.model";
import { environment } from "../../../../environments/environment";
import { ActivatedRoute, Params, Router, NavigationEnd } from "@angular/router";
import { AuthService } from "../../auth/services/auth.service";
import { Subscription } from "rxjs";
import { IUser } from "../../models/user.interface";
import { AlertMessageLinkService } from "../services/alert-message-link.service";

@Component({
  selector: "app-link-create",
  templateUrl: "./link-create.component.html",
  styleUrls: ["./link-create.component.css"]
})
export class LinkCreateComponent extends PremiumFeature
  implements OnInit, OnDestroy {
  link: ILink;
  userInfo: IUser;
  isExpired: boolean = true;
  showModal = false;
  paramId: string;
  editMode: boolean = false;
  isLoading: boolean = true;
  messages;
  linkAddress: string;
  navigationSubscription: Subscription;
  regexURL = /\b((http|https):\/\/?)[^\s()<>]+(?:\([\w\d]+\)|([^[:punct:]\s]|\/?))/;

  constructor(
    private linkService: LinkService,
    private authService: AuthService,
    private msgService: SystemMessagesService,
    private alertMessageLink: AlertMessageLinkService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    super();
    this.userInfo = undefined;
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.initSomeValuesAgain();
      }
    });
  }

  ngOnInit() {
    this.link = new Link();
    this.messages = this.msgService.getMessages()["generate-short-link"];
    this.route.params.subscribe(async (params: Params) => {
      if (params.id) {
        this.paramId = params.id;
        this.editMode = true;
        this.messages = this.msgService.getMessages()["edit-short-link"];
        this.link = await this.fetchLinkData(params.id);
        this.isLoading = false;
      }
    });
  }

  initSomeValuesAgain() {
    this.alertMessageLink.clearAllMessages();
    this.isLoading = true;
    const userLocalStorage = this.authService.getSavedUserInfo();
    if (userLocalStorage) {
      this.getUserInfo();
    } else {
      this.userInfo = undefined;
      this.isExpired = true;
      this.isLoading = false;
    }
  }

  async fetchLinkData(id: string) {
    return await this.linkService.getUserLink(id).toPromise();
  }

  submit() {
    //check adrress existence
    if (!this.link.address) {
      return this.alertMessageLink.alertAddressLink();
    }
    //check address url validate
    const myURL = this.regexURL.exec(this.link.address);
    if (myURL == null) return this.alertMessageLink.alertCorrectAddressLink();
    //check childeren component validate
    if (this.alertMessageLink.customLinkMessages != "") {
      return this.alertMessageLink.alertCustomLink();
    }
    if (this.alertMessageLink.passwordLinkMessage != "") {
      return this.alertMessageLink.alertPasswordLink();
    }
    // check action: update or create
    if (this.editMode) {
      this.linkService.updateLink(this.paramId, this.link).subscribe(
        res => {
          if (res._id) this.router.navigate(["../dashboard/link"]);
        },
        error => {
          if (error.status === 400)
            return this.alertMessageLink.alertCorrectAddressLink();
        }
      );
    }
    if (!this.editMode) {
      this.linkService.generateLink(this.link).subscribe(
        link => {
          this.link = link;
          this.linkAddress = environment.apiUrl.concat(`/${link.shorten}`);
        },
        error => {
          if (error.status === 400) {
            return this.alertMessageLink.alertCorrectAddressLink();
          }
          console.log(error);
        }
      );
    }
  }

  resetLink() {
    this.link = new Link();
    this.linkAddress = "";
    this.linkService.resetLinkComponents();
  }

  copyToClipBoard() {
    const str = this.linkAddress.slice();
    const el = document.createElement("textarea");
    el.value = str;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert("کپی شد");
  }

  getUserInfo() {
    this.authService.getUserInfo().subscribe(user => {
      if (user) {
        this.userInfo = user;
      }
      if (this.userInfo.remainingDays == 0 || null || undefined) {
        this.isExpired = true;
      } else {
        this.isExpired = false;
      }
      if (!this.editMode) {
        this.isLoading = false;
      }
    });
  }

  showUpgradeMessage() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  goPermium() {
    const userLocalStorage = this.authService.getSavedUserInfo();
    if (!userLocalStorage) {
      this.router.navigate(["/login"]);
    }
    this.router.navigate(["/dashboard/link/plans"]);
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}
