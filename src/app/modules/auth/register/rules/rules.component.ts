import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-rules",
  templateUrl: "./rules.component.html",
  styleUrls: ["./rules.component.css"]
})
export class RulesComponent implements OnInit {
  rulesContent;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.readRules().subscribe(res => {
      this.rulesContent = res.text();
    });
  }
}
