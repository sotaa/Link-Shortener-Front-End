import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Router, RouterModule } from '@angular/router';
import { OverviewComponent } from '../overview/overview.component';
import { DashboardStartComponent } from '../dashboard-start/dashboard-start.component';
import { PlansComponent } from '../plans/plans.component';
import { CreateLinkComponent } from '../create-link/create-link.component';

const routes: Routes = [
  {path: '' , component: DashboardStartComponent , children: [
    {path:'' , component: OverviewComponent},
    {path: 'plans' , component: PlansComponent},
    {path: 'init-link' , component: CreateLinkComponent}
  ]}
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class DashboardRoutingModule { }
