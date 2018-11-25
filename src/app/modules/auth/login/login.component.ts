import { Component, OnInit } from '@angular/core';
import { ILoginModel } from '../model/login.viewmodel';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {


  credentials: ILoginModel;

  constructor(private authService: AuthService, private router: Router) {
    this.credentials = { remember: true, password: '', email: ''}
   }


  submit() {
    this.authService.login(this.credentials).subscribe(user => {
      this.authService.updateSavedUser(user , false);
      this.router.navigate(['/dashboard']);
    } , err => {
      this.handleSubmitError(err);
    });
  }

  handleSubmitError(err: any) {
    // TODO: handle form error.
    // for now just log the error.
    console.log(err);
  }


}
