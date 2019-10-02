import { Component, OnInit } from "@angular/core";

import { LinkService } from "../services/link.service";
import { ILink, Link } from "../../models/link.interface";
import { SystemMessagesService } from "../services/system-messages.service";
import { PremiumFeature } from "../../models/premium-feature.model";
import { environment } from "../../../../environments/environment";

@Component({
  selector: "app-link-create",
  templateUrl: "./link-create.component.html",
  styleUrls: ["./link-create.component.css"]
})
export class LinkCreateComponent extends PremiumFeature implements OnInit {
  link: ILink;
  messages;
  linkAddress: string;

  constructor(
    private linkService: LinkService,
    msgService: SystemMessagesService
  ) {
    super();
    this.messages = msgService.getMessages();
  }

  ngOnInit() {
    // init link.
    // create new link.
    this.link = new Link();
  }

  generate() {
    this.linkService.generate(this.link).subscribe(link => {
      this.link = link;
      this.linkAddress = environment.apiUrl.concat(`/${link.shorten}`);
    });
  }

  resetLink() {
    this.link = new Link();
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
