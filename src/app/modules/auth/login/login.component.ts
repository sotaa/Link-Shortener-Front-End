import { Component, OnInit } from "@angular/core";
import { ILoginModel } from "../model/login.viewmodel";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
import { finalize } from "rxjs/operators";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  credentials: ILoginModel;
  errorMessage: string;
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) {
    this.credentials = { remember: true, password: "", email: "" };
  }

  submit() {
    this.isLoading = true;
    this.authService.login(this.credentials).pipe(finalize(() => this.isLoading = false)).subscribe(
      user => {
        this.authService.updateSavedUser(user, false);
        this.router.navigate(["/dashboard/link"]);
      },
      err => {
        this.handleSubmitError(err);
      }
    );
  }

  handleSubmitError(err: any) {
    // TODO: handle form error.
    // for now just log the error.
    this.errorMessage = err._body;
  }
}
