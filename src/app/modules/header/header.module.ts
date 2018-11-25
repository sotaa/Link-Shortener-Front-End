import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMainComponent } from './header-main/header-main.component';
import { AuthModule } from '../auth/auth.module';
import { UserInfoComponent } from './user-info/user-info.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    RouterModule
  ],
  declarations: [HeaderMainComponent, UserInfoComponent],
  exports: [HeaderMainComponent]
})
export class HeaderModule { }
