import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AuthComponent } from './auth/auth.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [LoginComponent, RegisterComponent, AuthComponent],
  declarations: [LoginComponent, RegisterComponent, AuthComponent]
})
export class AuthModule {}
