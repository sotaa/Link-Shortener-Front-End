import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { LinkService } from "../services/link.service";
import { AlertMessageLinkService } from "../services/alert-message-link.service";

@Component({
  selector: "app-link-password",
  templateUrl: "./link-password.component.html",
  styleUrls: ["./link-password.component.css"]
})
export class LinkPasswordComponent implements OnInit {
  routeSubscription: Subscription;
  shorten;
  linkPassword;

  constructor(
    private route: ActivatedRoute,
    private linkService: LinkService,
    private router: Router,
    private alertMessageLink: AlertMessageLinkService
  ) {
    this.linkService.removePasswordFromHeader();
  }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.shorten = params["code"];
    });
  }

  submitPassword() {
    if (!this.linkPassword || this.linkPassword.length < 3)
      return this.alertMessageLink.alertPasswordLink();
    this.linkService.appendPassword(this.linkPassword);
    this.router.navigate([`/${this.shorten}/info`]);
  }
}
