import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from "../auth/auth/auth.component";

const appRoutes: Routes = [
  {
    path: "",
    // pathMatch: "",
    loadChildren: "../public-view/pages/pages.module#PagesModule"
  },
  {
    path: "dashboard",
    loadChildren: "../dashboard/dashboard.module#DashboardModule"
  },
  {
    path: "login",
    loadChildren: "../auth/auth.module#AuthModule"
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { onSameUrlNavigation: "reload" })
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
