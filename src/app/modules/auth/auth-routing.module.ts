import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { RulesComponent } from "./register/rules/rules.component";

const routes: Routes = [
  { path: "login", component: AuthComponent },
  { path: "login/rules", component: RulesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
