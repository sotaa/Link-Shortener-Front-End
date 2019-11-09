import { EventEmitter, Output, Input } from "@angular/core";

export abstract class PremiumFeature {
  @Output() gikhariKard: EventEmitter<void>;
  @Input('isExpired') isGikhar: boolean;
  @Input() isEnable = false;


  constructor() {
    this.gikhariKard = new EventEmitter<void>();
  }

  giKhord() {
    this.gikhariKard.emit();
  }

  enable() {
    if (this.isGikhar) {
      this.giKhord();
      return;
    }

    this.isEnable = true;
  }

  disable() {
    this.isEnable = false;
  }
}
