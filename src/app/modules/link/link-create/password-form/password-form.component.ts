import { ILink } from "./../../../models/link.interface";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-password-form",
  templateUrl: "./password-form.component.html",
  styleUrls: ["./password-form.component.css"]
})
export class PasswordFormComponent implements OnInit {
  @Input() link: ILink;
  password: string;
  minimumLength: number;

  constructor() {
    this.minimumLength = 3;
    this.password = "";
  }

  ngOnInit() {
    // this.password = this.link.password;
  }

  save() {
    const ck = document.getElementById("savePass") as HTMLInputElement;
    if (ck.checked === true) {
      this.link.password = this.password;
      alert("تغییرات پسورد اعمال شد");
    } else {
      this.link.password = "";
    }
  }
}
