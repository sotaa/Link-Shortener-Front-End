import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { ILink } from "./../../models/link.interface";
import { AuthService } from "../../auth/services/auth.service";
import { LinkService } from "../../link/services/link.service";
import { CategoryService } from "../../link/services/category.service";
import * as PersianDate from "persian-date";

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
  isLoading = true;

  constructor(
    private authService: AuthService,
    private linkService: LinkService,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    await this.updateUserInfo();
    await this.getUserLinks(this.selectedTags);
    this.isLoading = false;
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
    let links = await this.linkService.getUserLinks(selectedTags).toPromise();
    if (links) {
      links = links.map(link => {
        link.createDate = new PersianDate(link.createDateFa)
          .toLocale("fa")
          .format();
        return link;
      });
    }
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

  async fetchLinksByTagFiltering(tag) {
    this.isLoading = true;
    if (!this.selectedTags.includes(tag)) {
      this.selectedTags.push(tag);
      await this.getUserLinks(this.selectedTags);
    }
    this.isLoading = false;
  }

  async fetchLinksByRemoveTagFiltering(tag) {
    this.isLoading = true;
    this.selectedTags = this.selectedTags.filter(item => item !== tag);
    await this.getUserLinks(this.selectedTags);
    this.isLoading = false;
  }
}
