import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AuthComponent } from "./auth/auth.component";
import { RulesComponent } from "./register/rules/rules.component";
import { AuthRoutingModule } from "./auth-routing.module";

@NgModule({
  imports: [CommonModule, AuthRoutingModule, FormsModule],
  exports: [LoginComponent, RegisterComponent, AuthComponent],
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent,
    RulesComponent
  ]
})
export class AuthModule {}
