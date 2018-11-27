import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { IUser } from 'src/app/modules/models/user.interface';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-remaining-time',
  templateUrl: './remaining-time.component.html',
  styleUrls: ['./remaining-time.component.css']
})
export class RemainingTimeComponent implements OnInit , OnDestroy{

  user: IUser;
  userSubscription: Subscription;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user = this.authService.getSavedUserInfo();
    this.userSubscription = this.authService.updateUserInfo.subscribe(user => {
      this.user = user;
    });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
