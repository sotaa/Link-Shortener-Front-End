import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderModule } from './modules/header/header.module';
import { PagesModule } from './modules/public-view/pages/pages.module';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { LinkModule } from './modules/link/link.module';
import { AppCommonModule } from './modules/common/common.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    PagesModule,
    AppRoutingModule,
    LinkModule,
    AppCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
