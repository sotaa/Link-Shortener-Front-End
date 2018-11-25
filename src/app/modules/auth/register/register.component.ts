import { Component, OnInit } from '@angular/core';
import { IRegisterModel } from '../model/register.viewmodel';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  credentials: IRegisterModel;

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
    // for now just log the error.
    console.log(err);
  }

}
