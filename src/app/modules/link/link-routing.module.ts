import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSegment } from '@angular/router';
import { LinkInfoComponent } from './link-info/link-info.component';

const routes: Routes = [
  {path: ':code/info' , component: LinkInfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinkRoutingModule { }
