import { ILink } from './../../../models/link.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css']
})
export class PasswordFormComponent implements OnInit {

  @Input() link: ILink;
  password: string;

  constructor() { }

  ngOnInit() {
    this.password = this.link.password;
  }

  save() {
    this.link.password = this.password;
    alert('تغییرات پسورد اعمال شد');
  }
}
