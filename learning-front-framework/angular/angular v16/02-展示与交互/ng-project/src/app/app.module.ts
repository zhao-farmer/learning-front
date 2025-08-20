import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Oc01Component } from './01-oc/01.component';
import { Data01Component } from './02-data/01.component';
import { Data02Component } from './02-data/02.component';
import { Data03Component } from './02-data/03.component';
import { Handler01Component } from './03-handler/01.component';
import { Handler02Component } from './03-handler/02.component';
import { Handler03Component } from './03-handler/03.component';
import { Handler04Component } from './03-handler/04.component';
import { Handler05Component } from './03-handler/05.component';
import { Handler06Component } from './03-handler/06.component';
import { Handler07Component } from './03-handler/07.component';

@NgModule({
  declarations: [
    AppComponent,
    Oc01Component,
    Data01Component,
    Data02Component,
    Data03Component,
    Handler01Component,
    Handler02Component,
    Handler03Component,
    Handler04Component,
    Handler05Component,
    Handler06Component,
    Handler07Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
