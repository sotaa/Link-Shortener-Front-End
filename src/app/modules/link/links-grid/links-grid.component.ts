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
  @Output() delete: EventEmitter<string>;
  @Output() update: EventEmitter<string>;
  host: string;
  store;

  constructor() {
    this.delete = new EventEmitter<string>();
    this.update = new EventEmitter<string>();
  }

  ngOnInit() {
    this.host = environment.apiUrl;
    this.links = this.links.map(link => {
      link.createDate = new PersianDate(link.createDate)
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
}
