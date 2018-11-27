import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  this.updateUserInfo();
  }


  updateUserInfo(){
    // TODO: show spinner until get new data.
    this.authService.getUserInfo().subscribe(user => {
      if(user) {
        this.authService.updateSavedUser(user,true);
      }
    }, err => {
      // TODO: handle the error.
      console.log(err);
    })
  }
}
