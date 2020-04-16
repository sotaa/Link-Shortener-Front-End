import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PagesRoutingModule } from "./pages-routing.module";
import { HomeComponent } from "./home/home.component";
import { LinksModule } from "../../link/link.module";
import { AuthModule } from "../../auth/auth.module";

@NgModule({
  imports: [CommonModule, PagesRoutingModule, LinksModule, AuthModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class PagesModule {}
