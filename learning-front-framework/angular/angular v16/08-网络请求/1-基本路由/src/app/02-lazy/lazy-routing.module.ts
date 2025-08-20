import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lazy01Component,Lazy02Component,Lazy03Component } from './lazy.component';

const routes: Routes = [
  { path: '01', component: Lazy01Component },
  { path: '02', component: Lazy02Component },
  { path: '03', component: Lazy03Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
