import { ICategory } from "./../../models/category.interface";
import { Injectable, Injector, EventEmitter, Output } from "@angular/core";
import { BaseService } from "../../base-items/base.service";
import { LinkCategoriesUrl } from "./urls";
import { Response } from "@angular/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CategoryService extends BaseService {
  constructor(injector: Injector) {
    super(injector);
  }
  save(data: ICategory[]) {
    return this.post(LinkCategoriesUrl.save, data);
  }

  getUserCategories() {
    return this.get(LinkCategoriesUrl.get).pipe(
      map<Response, ICategory[]>(res => res.json())
    );
  }

  removeAuthTokenFromHeader() {
    this.headers.delete("Authorization");
  }
}
