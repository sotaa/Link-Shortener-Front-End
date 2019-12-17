import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { ILink } from "./../../models/link.interface";
import { AuthService } from "../../auth/services/auth.service";
import { LinkService } from "../../link/services/link.service";
import { CategoryService } from "../../link/services/category.service";

@Component({
  selector: "app-overview",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.css"]
})
export class OverviewComponent implements OnInit {
  links: ILink[];
  userTags = [];
  selectedTags = [];
  selectedTag;
  remainingDays: Number;
  isUserExpired = true;
  showModal = false;

  constructor(
    private authService: AuthService,
    private linkService: LinkService,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    await this.updateUserInfo();
    this.getUserLinks(this.selectedTags);
    if (!this.isUserExpired) {
      this.categoryService.getUserCategories().subscribe(tags => {
        if (tags) this.userTags = tags;
      });
    }
    this.linkService.addTag.subscribe(tag => {
      this.fetchLinksByTagFiltering(tag);
    });
    this.linkService.removeTag.subscribe(tag => {
      this.fetchLinksByRemoveTagFiltering(tag);
    });
  }
  async getUserLinks(selectedTags: string[]) {
    const links = await this.linkService.getUserLinks(selectedTags).toPromise();
    this.links = links;
  }

  async deleteUserLink(id) {
    if (this.isUserExpired) {
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
    if (this.isUserExpired) {
      this.showUpgradeMessage();
      return;
    }
    this.router.navigate(["edit", id], { relativeTo: this.route });
  }

  getLinkInfo(shortenCode) {
    this.linkService.removePasswordFromHeader();
    this.router.navigate([`/${shortenCode}/info`]);
  }

  async updateUserInfo() {
    // TODO: show spinner until get new data.
    const user = await this.authService.getUserInfo().toPromise();
    this.remainingDays = user.remainingDays;
    this.isUserExpired = this.remainingDays <= 0;
    if (user) {
      this.authService.updateSavedUser(user, true);
    }
  }

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

  fetchLinksByTagFiltering(tag) {
    if (!this.selectedTags.includes(tag)) this.selectedTags.push(tag);
    this.getUserLinks(this.selectedTags);
  }

  fetchLinksByRemoveTagFiltering(tag) {
    this.selectedTags = this.selectedTags.filter(item => item !== tag);
    this.getUserLinks(this.selectedTags);
  }
}
