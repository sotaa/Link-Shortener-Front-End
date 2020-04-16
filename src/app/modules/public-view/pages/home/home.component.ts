import { Component, OnInit } from "@angular/core";
import * as queryString from "query-string";
import { Router } from "@angular/router";
import { AuthService } from "src/app/modules/auth/services/auth.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  isLoading: boolean;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.isLoading = true;
    const user = queryString.parseUrl(this.router.url).query;
    if (user && user.token) {
      this.authService.updateSavedUser(user, false);
      this.isLoading = false;
    } else {
      this.router.navigate(["/"]);
      this.isLoading = false;
    }
  }
}
