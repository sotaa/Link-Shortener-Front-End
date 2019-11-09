import { Component, OnInit, EventEmitter } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { ILink } from "./../../models/link.interface";
import { AuthService } from "../../auth/services/auth.service";
import { LinkService } from "../../link/services/link.service";

@Component({
  selector: "app-overview",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.css"]
})
export class OverviewComponent implements OnInit {
  links: ILink[];
  remainingDays: Number;
  isUserExpired = true;

  constructor(
    private authService: AuthService,
    private linkService: LinkService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.updateUserInfo();
    this.getUserLinks();
  }

  async getUserLinks() {
    await this.linkService
      .getUserLinks()
      .toPromise()
      .then(links => {
        this.links = links;
      });
  }

  async deleteUserLink(id) {
    if(this.isUserExpired) {
      this.showUpgradeMessage();
      return;
    }
    await this.linkService
      .deleteUserLink(id)
      .toPromise()
      .then(result => {
        this.links = this.links.filter(item => item._id !== id);
      });
  }

  updateUserLink(id) {
    if(this.isUserExpired) {
      this.showUpgradeMessage();
      return;
    }
    this.router.navigate(["edit", id], { relativeTo: this.route });
  }

  getLinkInfo(shortenCode) {
    this.linkService.removePasswordFromHeader();
    this.router.navigate([`/${shortenCode}/info`]);
  }

  updateUserInfo() {
    // TODO: show spinner until get new data.
    this.authService.getUserInfo().subscribe(
      user => {
        this.remainingDays = user.remainingDays;
        this.isUserExpired = this.remainingDays <= 0;
        if (user) {
          this.authService.updateSavedUser(user, true);
        }
      },
      err => {
        // TODO: handle the error.
        console.log(err);
      }
    );
  }


  showModal = false;
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
}
