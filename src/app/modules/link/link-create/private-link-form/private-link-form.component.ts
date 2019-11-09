import { Component, OnInit, Input } from "@angular/core";
import { Subscription } from "rxjs";
import { LinkService } from "../../services/link.service";
import { Router, NavigationEnd } from "@angular/router";
import { PremiumFeature } from "../premium-feature.class";

@Component({
  selector: "app-private-link-form",
  templateUrl: "./private-link-form.component.html",
  styleUrls: ["./private-link-form.component.css"]
})
export class PrivateLinkFormComponent extends PremiumFeature implements OnInit {
  @Input() link;
  @Input() editMode;

  navigationSubscription: Subscription;

  constructor(private linkService: LinkService, private router: Router) {
    super();
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.initValues();
      }
    });
  }

  ngOnInit() {
    this.initValues();
    this.linkService.resetCheckBox.subscribe(() => {
      this.isEnable = false;
    });
  }

  initValues() {
    this.isEnable = this.link.private;
  }

  toggleCheckbox() {
    if (!this.isEnable) {
      this.enable();
      this.link.private = this.isEnable;
    } else {
      this.disable();
      this.link.private = false;
    }
  }
}
