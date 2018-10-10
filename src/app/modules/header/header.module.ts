import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMainComponent } from './header-main/header-main.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderMainComponent],
  exports: [HeaderMainComponent]
})
export class HeaderModule { }
