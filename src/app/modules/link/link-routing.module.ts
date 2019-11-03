import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LinkInfoComponent } from "./link-info/link-info.component";
import { LinkPasswordComponent } from "./link-password/link-password.component";

const routes: Routes = [
  { path: ":code/info", component: LinkInfoComponent },
  { path: ":code/password", component: LinkPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinkRoutingModule {}
