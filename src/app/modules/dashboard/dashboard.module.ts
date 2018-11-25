import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { DashboardRoutingModule } from './dashboard-routing/dashboard-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { DashboardStartComponent } from './dashboard-start/dashboard-start.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [OverviewComponent, NavBarComponent, DashboardStartComponent]
})
export class DashboardModule { }
