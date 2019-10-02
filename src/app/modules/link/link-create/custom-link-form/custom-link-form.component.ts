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

  constructor(private linkService: LinkService) {
    this.shortenIsValid = undefined;
    this.minimumLength = 5;
    this.selectedShorten = "";
  }

  ngOnInit() {}

  checkShorten() {
    if (this.selectedShorten.length < this.minimumLength) {
      this.link.shorten = undefined;
      return (this.message = "حداقل 5 کاراکتر");
    }
    this.linkService.shortenIsExists(this.selectedShorten).subscribe(res => {
      this.handleExistentResult(res);
    });
  }

  handleExistentResult(isExists: boolean) {
    // this.shortenIsValid = !isExists;
    this.message = "";
    if (isExists) {
      this.message = "این لینک قبلا ثبت شده است";
      this.link.shorten = undefined;
    }
    if (!isExists) {
      this.message = "";
      this.link.shorten = this.selectedShorten;
    }
    if (this.selectedShorten === "") {
      this.link.shorten = undefined;
    } else return;
  }

  checkBox() {
    const check = document.getElementById("check") as HTMLInputElement;
    const customLink = document.getElementById(
      "customLink"
    ) as HTMLInputElement;
    if (check.checked === true) {
      customLink.removeAttribute("disabled");
    } else {
      this.link.shorten = undefined;
      customLink.setAttribute("disabled", "true");
      customLink.value = "";
      this.message = "";
    }
  }
}
