import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { LinkService } from "../../services/link.service";
import { ILink } from "src/app/modules/models/link.interface";

@Component({
  selector: "app-custom-link-form",
  templateUrl: "./custom-link-form.component.html",
  styleUrls: ["./custom-link-form.component.css"]
})
export class CustomLinkFormComponent implements OnInit {
  @Input() link: ILink;
  @Input() editMode: boolean;
  selectedShorten: string;
  hostAddress: string;
  shortenIsValid: boolean;
  message: string = "";
  minimumLength: number;
  check;
  disabled;
  value;

  constructor(private linkService: LinkService) {
    this.shortenIsValid = undefined;
    this.minimumLength = 5;
    this.selectedShorten = "";
  }

  ngOnInit() {
    this.disabled = true;
    if (this.editMode) {
      this.disabled = false;
      this.check = true;
      this.selectedShorten = this.link.shorten;
    } else this.selectedShorten;

    this.linkService.resetCheckBox.subscribe(() => {
      this.check = false;
      this.disabled = true;
      this.value = "";
      this.message = "";
    });
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

  checkBox() {
    this.check = !this.check;
    if (this.check === true) {
      this.disabled = false;
    } else {
      this.value = "";
      this.disabled = true;
      this.message = "";
      this.linkService.alertMessage = this.message;
      this.link.shorten = undefined;
    }
  }
}
