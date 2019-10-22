import { LinkService } from "./../services/link.service";
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { LinkInfo } from "../../models/link-info.interface";
import * as PersianDate from "persian-date";
import { environment } from "../../../../environments/environment";

@Component({
  selector: "app-link-info",
  templateUrl: "./link-info.component.html",
  styleUrls: ["./link-info.component.css"]
})
export class LinkInfoComponent implements OnInit {
  data: LinkInfo;
  notFound = false;
  routeSubscription: Subscription;
  shortenLink: string;
  createDate;

  constructor(
    private linkService: LinkService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(params => {
      const code = params["code"];
      if (code)
        this.linkService.getInfo(code).subscribe(data => {
          this.data = data;
          this.notFound = !this.data;
          this.getWindowUrl();
          this.createDate = new PersianDate(data.linkInfo.createDateFa)
            .toLocale("fa")
            .format();
        });
      if (!this.data) this.notFound = true;
    });
  }

  private getWindowUrl() {
    const host = environment.apiUrl;
    this.shortenLink = host.concat("/", this.data.linkInfo.shorten);
  }
}
