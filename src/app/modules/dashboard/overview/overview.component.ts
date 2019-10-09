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
    await this.linkService
      .deleteUserLink(id)
      .toPromise()
      .then(result => {
        this.links = this.links.filter(item => item._id !== id);
      });
  }
  updateUserLink(id) {
    this.router.navigate(["edit-link", id], { relativeTo: this.route });
  }

  updateUserInfo() {
    // TODO: show spinner until get new data.
    this.authService.getUserInfo().subscribe(
      user => {
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
}
