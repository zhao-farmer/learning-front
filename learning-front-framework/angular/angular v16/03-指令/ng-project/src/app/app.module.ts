import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Structure01Component } from './01-structure/01.component';
import { Structure02Component } from './01-structure/02.component';
import { Switch01Component } from './01-structure/03.component';
import { Child01Component,Parent01Component } from './02-component/01.component';
import { Child02Component,Parent02Component } from './02-component/02.component';
import { Child03Component,Parent03Component } from './02-component/03.component';
import { Child04Component,Parent04Component } from './02-component/04.component';
import { Child05Component,Parent05Component } from './02-component/05.component';
import { AutoFocusDirective } from './directive/focus.directive';
import { Attr01Component } from './03-attr/01.component';
import { DynamicBorderDirective } from './directive/border.directive';
import { Attr02Component } from './03-attr/02.component';
import { ResponsiveSizeDirective } from './directive/responsive.directive';
import { Attr03Component } from './03-attr/03.component';
import { NgSytel01Component,NgSytel02Component,NgSytel03Component } from './04-built/02.component';
import { CommonModule } from '@angular/common';
import { NgClass01Component,NgClass02Component,NgClass03Component } from './04-built/04.component';
import { NgModel01Component,NgModelGroup01Component } from './04-built/05.component';
import { FormControl01Component } from './04-built/06.component';
import { BaseForm01Component } from './04-built/07.component';
import { FormGroupName01Component } from './04-built/08.component';
import { FormArray01Component } from './04-built/09.component';
import { FormBuilder01Component,FormBuilder02Component,FormBuilder03Component } from './04-built/10.component';
import { Hidden01Component,Title01Component,Tabindex01Component } from './04-built/11.component';




@NgModule({
  declarations: [
    AppComponent,
    Structure01Component,
    Structure02Component,
    Child01Component,
    Parent01Component,
    Child02Component,
    Parent02Component,
    Child03Component,
    Parent03Component,
    Child04Component,
    Parent04Component,
    Child05Component,
    Parent05Component,
    Attr01Component,
    AutoFocusDirective,
    Attr02Component,
    DynamicBorderDirective,
    Attr03Component,
    ResponsiveSizeDirective,
    NgSytel01Component,
    NgSytel02Component,
    NgSytel03Component,
    NgClass01Component,
    NgClass02Component,
    NgClass03Component,
    NgModel01Component,
    NgModelGroup01Component,
    FormControl01Component,
    BaseForm01Component,
    FormGroupName01Component,
    FormArray01Component,
    FormBuilder01Component,
    FormBuilder02Component,
    FormBuilder03Component,
    Switch01Component,
    Hidden01Component,
    Title01Component,
    Tabindex01Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
