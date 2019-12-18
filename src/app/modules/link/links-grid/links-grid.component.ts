import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import * as PersianDate from "persian-date";

import { ILink } from "../../models/link.interface";
import { environment } from "../../../../environments/environment";

@Component({
  selector: "app-links-grid",
  templateUrl: "./links-grid.component.html",
  styleUrls: ["./links-grid.component.css"]
})
export class LinksGridComponent implements OnInit {
  @Input() links: ILink[];
  @Input() remainingDays: Number;
  @Input() selectedTags = [];
  @Input() userTags = [];
  @Output() delete: EventEmitter<string>;
  @Output() update: EventEmitter<string>;
  @Output() info: EventEmitter<string>;
  host: string;
  disabled;

  constructor() {
    this.delete = new EventEmitter<string>();
    this.update = new EventEmitter<string>();
    this.info = new EventEmitter<string>();
  }

  ngOnInit() {
    if (this.remainingDays == 0) {
      this.disabled = true;
    }
    this.host = environment.apiUrl;
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

  getLinkInfo(shortenCode: string) {
    this.info.emit(shortenCode);
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
