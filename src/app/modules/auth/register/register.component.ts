import { Component, OnInit } from "@angular/core";
import { IRegisterModel } from "../model/register.viewmodel";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
import { finalize } from "rxjs/operators";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  credentials: IRegisterModel;
  errorMessage: any;
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) {
    this.credentials = { name: "", agree: false, password: "", email: "" };
  }

  ngOnInit() {}

  submit() {
    this.isLoading = true;
    if (this.credentials.agree) {
      this.authService
        .register(this.credentials)
        .pipe(finalize(() => (this.isLoading = false)))
        .subscribe(
          user => {
            this.authService.updateSavedUser(user, false);
            this.router.navigate(["/dashboard/link"]);
          },
          err => {
            this.handleSubmitError(err);
          }
        );
    } else {
      this.errorMessage = "شما با قوانین سایت موافقت نکرده اید!";
      return (this.isLoading = false);
    }
  }

  handleSubmitError(err: any) {
    if (err._body.includes("User validation failed: email:")) {
      return (this.errorMessage = err._body.split(
        "User validation failed: email:"
      )[1]);
    } else if (err._body.includes("User validation failed: name:")) {
      return (this.errorMessage = err._body.split(
        "User validation failed: name:"
      )[1]);
    } else if (err._body.includes("User validation failed: password:")) {
      return (this.errorMessage = err._body.split(
        "User validation failed: password:"
      )[1]);
    } else this.errorMessage = err._body;
  }
}
