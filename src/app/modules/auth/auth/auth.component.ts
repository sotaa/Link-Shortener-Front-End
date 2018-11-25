import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  registerMode = false;

  constructor() { }

  ngOnInit() {
  }

  toggleRegisterMode() {
    this.registerMode = !this.registerMode;
  }

}
