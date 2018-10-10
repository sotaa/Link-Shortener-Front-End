import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkRoutingModule } from './link-routing.module';
import { LinkCreateComponent } from './link-create/link-create.component';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    LinkRoutingModule,
    FormsModule,
    HttpModule
  ],
  declarations: [LinkCreateComponent],
  exports: [LinkCreateComponent]
})
export class LinkModule { }
