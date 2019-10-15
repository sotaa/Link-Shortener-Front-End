import { OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IUser } from "src/app/modules/models/user.interface";
import { AuthService } from "src/app/modules/auth/services/auth.service";

@Component({
  selector: "app-premium-cta",
  templateUrl: "./premium-cta.component.html",
  styleUrls: ["./premium-cta.component.css"]
})
export class PremiumCtaComponent implements OnInit, OnDestroy {
  user: IUser;
  userSubscription: Subscription;
  constructor(private router: Router, private authService: AuthService) {
    this.user = undefined;
  }

  ngOnInit() {
    this.user = this.authService.getSavedUserInfo();
    this.userSubscription = this.authService.updateUserInfo.subscribe(user => {
      this.user = user;
    });
  }

  goToPlans() {
    this.router.navigate(["dashboard", "plans"]);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
