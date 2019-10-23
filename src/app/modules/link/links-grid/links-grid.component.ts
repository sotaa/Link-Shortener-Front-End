import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import * as PersianDate from "persian-date";

import { ILink } from "../../models/link.interface";
import { environment } from "../../../../environments/environment";
import { AuthService } from "../../auth/services/auth.service";
import { IUser } from "../../models/user.interface";
import { Router } from "@angular/router";

@Component({
  selector: "app-links-grid",
  templateUrl: "./links-grid.component.html",
  styleUrls: ["./links-grid.component.css"]
})
export class LinksGridComponent implements OnInit {
  @Input() links: ILink[];
  @Input() remainingDays: Number;
  @Output() delete: EventEmitter<string>;
  @Output() update: EventEmitter<string>;
  host: string;
  store;
  disabled;

  constructor() {
    this.delete = new EventEmitter<string>();
    this.update = new EventEmitter<string>();
  }

  ngOnInit() {
    if (this.remainingDays == 0) {
      this.disabled = true;
    }
    this.host = environment.apiUrl;
    this.links = this.links.map(link => {
      link.createDate = new PersianDate(link.createDateFa)
        .toLocale("fa")
        .format();
      return link;
    });
  }

  deleteUserLink(id: string) {
    const deleteConfirmed = confirm("ایا مایل به حذف این لینک هستید؟");
    if (deleteConfirmed == true) {
      this.delete.emit(id);
    }
  }
  updateUserLink(id: string) {
    this.update.emit(id);
  }

  getLinkInfo(shortenCode) {
    open(`${environment.apiUrl}/${shortenCode}/info`, "_blank");
  }

  copyToClipBoard(shorten) {
    const linkAddress = environment.apiUrl.concat(`/${shorten}`);
    const str = linkAddress.slice();
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
