import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { DashboardRoutingModule } from './dashboard-routing/dashboard-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DashboardStartComponent } from './dashboard-start/dashboard-start.component';
import { PremiumCtaComponent } from './overview/premium-cta/premium-cta.component';
import { RemainingTimeComponent } from './overview/remaining-time/remaining-time.component';
import { ExpiredComponent } from './overview/remaining-time/expired/expired.component';
import { LinksGridComponent } from './links-grid/links-grid.component';
import { PlansComponent } from './plans/plans.component';
import { PricePipe } from './pipes/price.pipe';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [OverviewComponent, NavBarComponent, DashboardStartComponent,
     PremiumCtaComponent, RemainingTimeComponent, ExpiredComponent, LinksGridComponent, PlansComponent, PricePipe]
})
export class DashboardModule { }
