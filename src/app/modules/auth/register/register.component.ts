import { Component, OnInit } from '@angular/core';
import { IRegisterModel } from '../model/register.viewmodel';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  credentials: IRegisterModel;
  errorMessage: any;

  constructor(private authService: AuthService, private router: Router) {
    this.credentials = {name: '', agree: true, password: '', email: ''}
   }

  ngOnInit() {
  }

  submit() {
    this.authService.register(this.credentials).subscribe(user => {
      this.authService.updateSavedUser(user , false);
      this.router.navigate(['/dashboard']);
    } , err => {
     this.handleSubmitError(err);
    });
  }

  handleSubmitError(err: any) {
    // TODO: handle form error.
    this.errorMessage = err.message;
  }

}
