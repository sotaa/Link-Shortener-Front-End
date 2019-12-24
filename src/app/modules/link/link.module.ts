import { LinksGridComponent } from "./links-grid/links-grid.component";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { LinkRoutingModule } from "./link-routing.module";
import { LinkCreateComponent } from "./link-create/link-create.component";
import { HttpModule } from "@angular/http";
import { AppCommonModule } from "../common/common.module";
import { CommonModule } from "@angular/common";
import { NgSelectModule } from "@ng-select/ng-select";

import { LinkInfoComponent } from "./link-info/link-info.component";
import { ChartModule } from "angular-highcharts";
import { ClickDayChartComponent } from "./link-info/click-day-chart/click-day-chart.component";
import { BrowserChartComponent } from "./link-info/browser-chart/browser-chart.component";
import { LocationChartComponent } from "./link-info/location-chart/location-chart.component";
import { ReferrersChartComponent } from "./link-info/referrers-chart/referrers-chart.component";
import { PlatformsChartComponent } from "./link-info/platforms-chart/platforms-chart.component";
import { PasswordFormComponent } from "./link-create/password-form/password-form.component";
import { UtmFormComponent } from "./link-create/utm-form/utm-form.component";
import { CustomLinkFormComponent } from "./link-create/custom-link-form/custom-link-form.component";
import { CategoryFormComponent } from "./link-create/category-form/category-form.component";
import { DeepLinkFormComponent } from "./link-create/deep-link-form/deep-link-form.component";
import { ConditionComponent } from "./link-create/deep-link-form/condition/condition.component";
import { ContinentsComponent } from "./link-info/continents/continents.component";
import { RegionsComponent } from "./link-info/regions/regions.component";
import { CitiesComponent } from "./link-info/cities/cities.component";
import { LanguagesComponent } from "./link-info/languages/languages.component";
import { DevicesComponent } from "./link-info/devices/devices.component";
import { LinkPasswordComponent } from "./link-password/link-password.component";
import { PrivateLinkFormComponent } from "./link-create/private-link-form/private-link-form.component";
import { LinkResultPrivateComponent } from "./link-result-private/link-result-private.component";
import { LinkNotFoundComponent } from "./link-not-found/link-not-found.component";
import { LinkFilterComponent } from "./link-filter/link-filter.component";
import { LinkDoesntExistComponent } from "./link-doesnt-exist/link-doesnt-exist.component";
import { LinkDoesntCreateComponent } from "./link-doesnt-create/link-doesnt-create.component";

@NgModule({
  imports: [
    CommonModule,
    LinkRoutingModule,
    FormsModule,
    HttpModule,
    ChartModule,
    AppCommonModule,
    NgSelectModule
  ],
  declarations: [
    LinkCreateComponent,
    LinkInfoComponent,
    ClickDayChartComponent,
    BrowserChartComponent,
    LocationChartComponent,
    ReferrersChartComponent,
    PlatformsChartComponent,
    LinksGridComponent,
    PasswordFormComponent,
    UtmFormComponent,
    CustomLinkFormComponent,
    CategoryFormComponent,
    DeepLinkFormComponent,
    ConditionComponent,
    ContinentsComponent,
    RegionsComponent,
    CitiesComponent,
    LanguagesComponent,
    DevicesComponent,
    LinkPasswordComponent,
    PrivateLinkFormComponent,
    LinkResultPrivateComponent,
    LinkNotFoundComponent,
    LinkFilterComponent,
    LinkDoesntExistComponent,
    LinkDoesntCreateComponent
  ],
  exports: [LinkCreateComponent, LinkInfoComponent, LinksGridComponent]
})
export class LinksModule {}
