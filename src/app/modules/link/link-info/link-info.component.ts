import { LinkService } from "./../services/link.service";
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { LinkInfo } from "../../models/link-info.interface";
import * as PersianDate from "persian-date";
import { environment } from "../../../../environments/environment";

@Component({
  selector: "app-link-info",
  templateUrl: "./link-info.component.html",
  styleUrls: ["./link-info.component.css"]
})
export class LinkInfoComponent implements OnInit, OnDestroy {
  data: LinkInfo;
  userIsExpired;
  notFound = false;
  routeSubscription: Subscription;
  shortenLink: string;
  createDate;

  constructor(
    private linkService: LinkService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    let code;
    this.routeSubscription = this.route.params.subscribe(params => {
      code = params["code"];
      if (code) {
        this.linkService
          .getInfo(code)
          .toPromise()
          .then(data => {
            this.userIsExpired = data.userIsExpired;
            this.data = data;
            this.notFound = !this.data;
            this.getWindowUrl();
            this.createDate = new PersianDate(data.linkInfo.createDateFa)
              .toLocale("fa")
              .format();
          })
          .catch(err => {
            if (err.status == 401) this.router.navigate([`${code}/password/`]);
            if (err.status == 400) {
              alert("رمز عبور صحیح نمی باشد!");
              this.router.navigate([`${code}/password/`]);
            }
          });
      }
      if (!this.data) return (this.notFound = true);
    });
  }

  private getWindowUrl() {
    const host = environment.apiUrl;
    this.shortenLink = host.concat("/", this.data.linkInfo.shorten);
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
