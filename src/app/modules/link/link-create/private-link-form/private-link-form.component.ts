import { Component, OnInit, Input } from "@angular/core";
import { Subscription } from "rxjs";
import { LinkService } from "../../services/link.service";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-private-link-form",
  templateUrl: "./private-link-form.component.html",
  styleUrls: ["./private-link-form.component.css"]
})
export class PrivateLinkFormComponent implements OnInit {
  @Input() link;
  @Input() editMode;
  @Input() isExpired;
  checked;
  navigationSubscription: Subscription;

  constructor(private linkService: LinkService, private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.initValues();
      }
    });
  }

  ngOnInit() {
    this.initValues();
    this.linkService.resetCheckBox.subscribe(() => {
      this.checked = false;
    });
  }

  initValues() {
    this.checked = false;
    if (this.editMode) {
      if (this.link.private === true) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    }
  }

  toggleCheckbox() {
    this.checked = !this.checked;
    if (this.checked) {
      this.link.private = true;
    } else {
      this.link.private = false;
    }
  }
}
