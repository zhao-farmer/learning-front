import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// 页面注册
import { CounterComponent } from './components/counter.component';
import { UserComponent } from './components/user.component';

// 这些都是要进行状态管理的配置
import { counterReducer } from './store/counter/counter.reducer';
import { userReducer } from './store/user/user.reducer';
import { UserEffects } from './store/user/user.effects';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      counter: counterReducer,
      users: userReducer
    }, {}),
    EffectsModule.forRoot([UserEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
