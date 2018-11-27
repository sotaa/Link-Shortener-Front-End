import { IPaymentPlan } from "./../../models/payment-plan.interface";
import { Response } from "@angular/http";
import { Injectable, Injector } from "@angular/core";
import { BaseService } from "../../base-items/base.service";
import { PlansUrls } from "./urls";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PlansService extends BaseService {
  constructor(injector: Injector) {
    super(injector);
  }

  getPlans() {
    return this.get(PlansUrls.activePlans).pipe(
      map<Response, IPaymentPlan[]>(plans => plans.json())
    );
  }

  // send checkout request for selected plan and get gateway url for payment.
  submitCheckout(plan: IPaymentPlan) {
    return this.post(PlansUrls.checkout, plan).pipe(
      map<Response, { url: string }>(res => res.json())
    );
  }
}
