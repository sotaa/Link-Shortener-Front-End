import { ICategory } from "./../../../models/category.interface";
import { Component, OnInit, Input } from "@angular/core";
import { CategoryService } from "../../services/category.service";
import { ILink } from "src/app/modules/models/link.interface";

@Component({
  selector: "app-category-form",
  templateUrl: "./category-form.component.html",
  styleUrls: ["./category-form.component.css"]
})
export class CategoryFormComponent implements OnInit {
  @Input() link: ILink;
  data: ICategory[] = [];

  selectedCategory: any;
  message: string;
  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryService.getUserCategories().subscribe(cats => {
      // if (cats) this.data = cats;
    });
  }

  // save the category changes;
  saveCategories() {
    this.showSpinner();
    this.categoryService.save(this.data).subscribe(
      result => {
        this.hideSpinner();
      },
      err => {
        console.log(err);
      }
    );
  }
  hideSpinner(): any {}
  showSpinner(): any {}

  // get selected category.
  selectCategory(node) {
    this.selectedCategory = node;
    this.link.categories = [node];
  }
  save() {
    this.message = "ذخیره شد";
  }
}
