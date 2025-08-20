import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Getter01Component } from './01-getter/01.component';
import { Getter02Component } from './01-getter/02.component';
import { Getter03Component } from './01-getter/03.component';
import { Pipe01Component } from './02-pipe/01.component';
import { Pipe02Component } from './02-pipe/02.component';
import { Pipe03Component } from './02-pipe/03.component';
import { Pipe04Component,TruncatePipe } from './02-pipe/04.component';
import { Rxjs01Component } from './03-rxjs/01.component';
import { Rxjs02Component } from './03-rxjs/02.component';
import { SenderComponent,ReceiverComponent,Rxjs03Component } from './03-rxjs/03.component';
import { Rxjs04Component } from './03-rxjs/04.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Rxjs05Component } from './03-rxjs/05.component';
import { Signal01Component } from './04-signal/01.component';
import { Projection01ChildComponent,Projection01Component } from './05-projection/01.component';
import { Projection02ChildComponent,Projection02Component } from './05-projection/02.component';
import { Projection03ChildComponent,Projection03Component } from './05-projection/03.component';


@NgModule({
  declarations: [
    AppComponent,
    Getter01Component,
    Getter02Component,
    Getter03Component,
    Pipe01Component,
    Pipe02Component,
    Pipe03Component,
    TruncatePipe,
    Pipe04Component,
    Rxjs01Component,
    Rxjs02Component,
    SenderComponent,
    ReceiverComponent,
    Rxjs03Component,
    Rxjs04Component,
    Rxjs05Component,
    Signal01Component,
    Projection01ChildComponent,
    Projection01Component,
    Projection02ChildComponent,
    Projection02Component,
    Projection03ChildComponent,
    Projection03Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
