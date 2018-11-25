import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { LinkModule } from '../../link/link.module';
import { AuthModule } from '../../auth/auth.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    LinkModule,
    AuthModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class PagesModule { }
