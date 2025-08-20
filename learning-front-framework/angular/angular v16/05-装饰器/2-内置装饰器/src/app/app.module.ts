import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    { provide: 'API_ENDPOINT', useValue: 'http://localhost:3000' },
    { provide: 'DEFAULT_THEME', useValue: 'light' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
