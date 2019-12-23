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
    this.credentials = { name: "", agree: true, password: "", email: "" };
  }

  ngOnInit() {}

  submit() {
    this.isLoading = true;
    this.authService.register(this.credentials).pipe(finalize(() => this.isLoading = false)).subscribe(
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
    this.errorMessage = err._body;
  }
}
