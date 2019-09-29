import { Component, OnInit, Input } from "@angular/core";
import { LinkService } from "../../services/link.service";
import { ILink } from "src/app/modules/models/link.interface";

@Component({
  selector: "app-custom-link-form",
  templateUrl: "./custom-link-form.component.html",
  styleUrls: ["./custom-link-form.component.css"]
})
export class CustomLinkFormComponent implements OnInit {
  @Input() link: ILink;
  selectedShorten: string;
  hostAddress: string;
  shortenIsValid: boolean;
  message: string = "";
  minimumLength: number;
  test: string;

  constructor(private linkService: LinkService) {
    this.shortenIsValid = undefined;
    this.minimumLength = 5;
    this.selectedShorten = "";
  }

  ngOnInit() {}

  checkShorten() {
    if (this.selectedShorten.length < this.minimumLength) return;
    this.linkService.shortenIsExists(this.selectedShorten).subscribe(res => {
      this.handleExistentResult(res);
    });
  }

  handleExistentResult(isExists: boolean) {
    this.shortenIsValid = !isExists;
    this.message = "";
    if (isExists) {
      this.message = "این لینک قبلا ثبت شده است";
    } else {
      this.message = "";
    }
  }

  save() {
    const ck = document.getElementById("saveLink") as HTMLInputElement;
    if (ck.checked === true) {
      this.link.shorten = this.selectedShorten;
    } else {
      this.link.shorten = undefined;
    }
  }
}
