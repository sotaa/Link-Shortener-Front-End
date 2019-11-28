import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { LinkService } from "../services/link.service";

@Component({
  selector: "app-link-filter",
  templateUrl: "./link-filter.component.html",
  styleUrls: ["./link-filter.component.css"]
})
export class LinkFilterComponent implements OnInit {
  @Input() selectedTags = [];
  @Input() userTags = [];
  @Output() addTag: EventEmitter<string>;
  @Output() removeTag: EventEmitter<string>;
  constructor(private linkService: LinkService) {
    this.addTag = new EventEmitter<string>();
    this.removeTag = new EventEmitter<string>();
  }

  ngOnInit() {}

  addTagtoSelectedArray(e) {
    this.linkService.addTagtoSelectedArray(e.target.value);
  }
  removeTagFromSelectedArray(tag) {
    this.linkService.removeTagFromSelectedArray(tag);
  }
}
