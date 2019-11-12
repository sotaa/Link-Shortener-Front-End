import { EventEmitter, Output, Input } from "@angular/core";
import { ILink } from "../../models/link.interface";

export abstract class PremiumFeature {
  @Output() unavailable: EventEmitter<void>;
  @Input() link: ILink;
  @Input() editMode: boolean;
  @Input() isExpired: boolean;
  isEnable = false;

  constructor() {
    this.unavailable = new EventEmitter<void>();
  }

  cannotBeAccess() {
    this.unavailable.emit();
  }

  enable() {
    if (this.isExpired) {
      this.cannotBeAccess();
      return;
    }
    this.isEnable = true;
  }

  disable() {
    this.isEnable = false;
  }
}
