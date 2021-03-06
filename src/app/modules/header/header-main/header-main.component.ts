import { IUser } from "./../../models/user.interface";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuthService } from "../../auth/services/auth.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-header-main",
  templateUrl: "./header-main.component.html",
  styleUrls: ["./header-main.component.css"]
})
export class HeaderMainComponent implements OnInit, OnDestroy {
  constructor(private authService: AuthService) {}
  visibleAuthDropdown = false;
  userInfo: IUser;

  userInfoSubscription: Subscription;

  ngOnInit() {
    this.userInfo = this.authService.getSavedUserInfo();
    this.userInfoSubscription = this.authService.updateUserInfo.subscribe(
      user => {
        this.userInfo = user;
      }
    );
  }

  ngOnDestroy() {
    this.userInfoSubscription.unsubscribe();
  }
}
