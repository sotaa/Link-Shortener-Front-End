import { Component, OnInit } from "@angular/core";

import { LinkService } from "../services/link.service";
import { ILink, Link } from "../../models/link.interface";
import { SystemMessagesService } from "../services/system-messages.service";
import { PremiumFeature } from "../../models/premium-feature.model";
import { environment } from "../../../../environments/environment";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: "app-link-create",
  templateUrl: "./link-create.component.html",
  styleUrls: ["./link-create.component.css"]
})
export class LinkCreateComponent extends PremiumFeature implements OnInit {
  link: ILink;
  paramId: string;
  editMode: boolean = false;
  isLoading: boolean = true;
  messages;
  linkAddress: string;

  constructor(
    private linkService: LinkService,
    private msgService: SystemMessagesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    super();
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
      }
      this.isLoading = false;
    });
  }

  async fetchLinkData(id: string) {
    return await this.linkService.getUserLink(id).toPromise();
  }

  submit() {
    if (this.linkService.alertMessage) {
      return alert(`${this.linkService.alertMessage}`);
    } else {
      if (this.editMode) {
        this.linkService.updateLink(this.paramId, this.link).subscribe(() => {
          this.router.navigate(["../dashboard/link"]);
        });
      } else {
        this.linkService.generateLink(this.link).subscribe(link => {
          this.link = link;
          this.linkAddress = environment.apiUrl.concat(`/${link.shorten}`);
        });
      }
    }
  }

  resetLink() {
    this.link = new Link();
    this.linkAddress = "";
    this.linkService.resetCustomLink();
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
}
