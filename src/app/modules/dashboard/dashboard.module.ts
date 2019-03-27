import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { DashboardRoutingModule } from './dashboard-routing/dashboard-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DashboardStartComponent } from './dashboard-start/dashboard-start.component';
import { PremiumCtaComponent } from './overview/premium-cta/premium-cta.component';
import { RemainingTimeComponent } from './overview/remaining-time/remaining-time.component';
import { ExpiredComponent } from './overview/remaining-time/expired/expired.component';
import { PlansComponent } from './plans/plans.component';
import { PricePipe } from './pipes/price.pipe';
import { LinksModule } from '../link/link.module';
import { CreateLinkComponent } from './create-link/create-link.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LinksModule
  ],
  declarations: [OverviewComponent, NavBarComponent, DashboardStartComponent,
     PremiumCtaComponent, RemainingTimeComponent, ExpiredComponent, PlansComponent, PricePipe, CreateLinkComponent]
})
export class DashboardModule { }
