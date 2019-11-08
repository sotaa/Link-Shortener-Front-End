import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AlertService {
  constructor() {}

  alert(msg: string) {
    alert(msg);
  }
}
