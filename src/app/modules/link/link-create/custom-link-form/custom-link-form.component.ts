import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { LinkService } from "../../services/link.service";
import { ILink } from "src/app/modules/models/link.interface";
import { Subscription } from "rxjs";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-custom-link-form",
  templateUrl: "./custom-link-form.component.html",
  styleUrls: ["./custom-link-form.component.css"]
})
export class CustomLinkFormComponent implements OnInit, OnDestroy {
  @Input() link: ILink;
  @Input() editMode: boolean;
  @Input() isExpired: boolean;
  selectedShorten: string;
  hostAddress: string;
  shortenIsValid: boolean;
  message: string = "";
  minimumLength: number;
  checked;
  disabled;
  value;
  navigationSubscription: Subscription;

  constructor(private linkService: LinkService, private router: Router) {
    this.shortenIsValid = undefined;
    this.minimumLength = 5;
    this.selectedShorten = "";
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
      this.disabled = true;
      this.selectedShorten = "";
      this.message = "";
    });
  }

  initValues() {
    this.disabled = true;
    this.checked = false;
    if (this.editMode) {
      this.disabled = false;
      this.checked = true;
      this.selectedShorten = this.link.shorten;
    } else this.selectedShorten;
  }

  checkShorten() {
    if (this.selectedShorten.length < this.minimumLength) {
      this.link.shorten = undefined;
      return (
        (this.message = "حداقل 5 کاراکتر"),
        (this.linkService.alertMessage = this.message)
      );
    }
    this.linkService.shortenIsExists(this.selectedShorten).subscribe(res => {
      this.handleExistentResult(res);
    });
    this;
  }

  handleExistentResult(isExists: boolean) {
    this.message = "";
    this.linkService.alertMessage = this.message;
    if (isExists) {
      this.message = "این لینک قبلا ثبت شده است";
      this.linkService.alertMessage = this.message;
      this.link.shorten = undefined;
    } else {
      this.message = "";
      this.linkService.alertMessage = this.message;
      this.link.shorten = this.selectedShorten;
    }
  }

  toggleCheckbox() {
    this.checked = !this.checked;
    if (this.checked) {
      this.disabled = false;
    } else {
      this.message = "";
      this.linkService.alertMessage = this.message;
      this.selectedShorten = "";
      this.link.shorten = undefined;
      this.disabled = true;
    }
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}
