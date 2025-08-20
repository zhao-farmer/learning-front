import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { Lazy01Component,Lazy02Component,Lazy03Component } from './lazy.component';

@NgModule({
  declarations: [
    Lazy01Component,
    Lazy02Component,
    Lazy03Component
  ],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }
