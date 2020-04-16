import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderModule } from "./modules/header/header.module";
import { AppRoutingModule } from "./modules/app-routing/app-routing.module";
import { AppCommonModule } from "./modules/common/common.module";
import { AuthModule } from "./modules/auth/auth.module";
import { FooterModule } from "./modules/footer/footer.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NotFoundPageComponent } from './modules/public-view/not-found-page/not-found-page.component';

@NgModule({
  declarations: [AppComponent, NotFoundPageComponent],
  imports: [
    BrowserModule,
    HeaderModule,
    FooterModule,
    HttpModule,
    AppRoutingModule,
    AppCommonModule,
    AuthModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
