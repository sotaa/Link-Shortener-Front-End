import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { LinkModule } from '../../link/link.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    LinkModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class PagesModule { }
