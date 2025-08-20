import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Rec01Component } from './01-rec/01.component';
import { Example01Component,Example01ChildComponent } from './02-example/01.component';
import { Example02Component } from './02-example/02.component';
import { Example03Component } from './02-example/03.component';
import { Example04Component,Example04ChildComponent } from './02-example/04.component';
import { Example05Component } from './02-example/05.component';
import { Example06Component,Example06ChildComponent } from './02-example/06.component';
import { Example07Component } from './02-example/07.component';
import { Example08Component } from './02-example/08.component';
import { UserListComponent,UserCounterComponent } from './03-case/01.component';
import { Case02Component } from './03-case/02.component';


@NgModule({
  declarations: [
    AppComponent,
    Rec01Component,
    Example01ChildComponent,
    Example01Component,
    Example02Component,
    Example03Component,
    Example04ChildComponent,
    Example04Component,
    Example05Component,
    Example06ChildComponent,
    Example06Component,
    Example07Component,
    Example08Component,
    UserListComponent,
    UserCounterComponent,
    Case02Component,
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
