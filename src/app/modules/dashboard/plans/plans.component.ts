import { Component, OnInit } from '@angular/core';
import { PlansService } from '../services/plans.service';
import { IPaymentPlan } from '../../models/payment-plan.interface';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  plans: IPaymentPlan[];
  colors = ['warning', 'danger' , 'success', 'info' , 'primary', 'default']
  constructor(private plansService: PlansService) { }

  ngOnInit() {
    // TODO: Show spinner.
    this.plansService.getPlans().subscribe(plans => this.plans= plans , err => console.log(err));
  }

  selectPlan(plan: IPaymentPlan) {
    // TODO: Show spinner.
    this.plansService.submitCheckout(plan).subscribe(res => open(res.url));
  }
}
