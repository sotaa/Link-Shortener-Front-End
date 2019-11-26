import { ICategory } from "./../../../models/category.interface";
import { Component, OnInit } from "@angular/core";
import { CategoryService } from "../../services/category.service";
import { PremiumFeature } from "../premium-feature.class";
import { Subscription } from "rxjs";
import { NavigationEnd, Router } from "@angular/router";
import { LinkService } from "../../services/link.service";

@Component({
  selector: "app-category-form",
  templateUrl: "./category-form.component.html",
  styleUrls: ["./category-form.component.css"]
})
export class CategoryFormComponent extends PremiumFeature implements OnInit {
  data: ICategory[] = [];
  minimumLength: number;
  navigationSubscription: Subscription;
  constructor(
    private categoryService: CategoryService,
    private linkService: LinkService,
    private router: Router
  ) {
    super();
    this.minimumLength = 2;
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.initValues();
      }
    });
  }

  ngOnInit() {
    this.initValues();
    this.linkService.resetCheckBox.subscribe(() => {
      this.disable();
      this.link.categories = undefined;
    });
    if (!this.isExpired) {
      this.categoryService.getUserCategories().subscribe(cats => {
        if (cats) this.data = cats;
      });
    }
  }

  initValues() {
    if (this.link.categories && this.link.categories.length !== 0) {
      this.enable();
    } else {
      this.disable();
    }
  }

  addTagFn(title) {
    return title;
  }

  toggleCheckbox() {
    if (!this.isEnable) {
      this.enable();
    } else {
      this.link.categories = undefined;
      this.disable();
    }
  }

  // save the category changes;
  // saveCategories() {
  //   this.showSpinner();
  //   this.categoryService.save(this.data).subscribe(
  //     result => {
  //       this.hideSpinner();
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  // }
  // hideSpinner(): any {}
  // showSpinner(): any {}

  // get selected category.
  // selectCategory(node) {
  //   this.selectedCategory = node;
  //   this.link.categories = [node];
  // }
  // save() {
  //   this.message = "ذخیره شد";
  // }
}
