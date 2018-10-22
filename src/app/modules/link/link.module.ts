import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { LinkRoutingModule } from "./link-routing.module";
import { LinkCreateComponent } from "./link-create/link-create.component";
import { HttpModule } from "@angular/http";
import { LinkInfoComponent } from "./link-info/link-info.component";
import { ChartModule } from "angular-highcharts";
import { ClickDayChartComponent } from "./link-info/click-day-chart/click-day-chart.component";
import { BrowserChartComponent } from "./link-info/browser-chart/browser-chart.component";
import { LocationChartComponent } from "./link-info/location-chart/location-chart.component";
import { ReferrersChartComponent } from "./link-info/referrers-chart/referrers-chart.component";
import { PlatformsChartComponent } from './link-info/platforms-chart/platforms-chart.component';
import { AppCommonModule } from "../common/common.module";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    LinkRoutingModule,
    FormsModule,
    HttpModule,
    ChartModule,
    AppCommonModule
  ],
  declarations: [
    LinkCreateComponent,
    LinkInfoComponent,
    ClickDayChartComponent,
    BrowserChartComponent,
    LocationChartComponent,
    ReferrersChartComponent,
    PlatformsChartComponent
  ],
  exports: [LinkCreateComponent, LinkInfoComponent]
})
export class LinkModule {}
