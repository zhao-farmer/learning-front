import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// MatDialogModule
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
// CanActivateFn 使用
import { LoginComponent } from './01-CanActivate/login.component';
import { HomeComponent } from './01-CanActivate/home.component';
// CanDeactivate 使用
import { EditProfileComponent } from './03-CanDeactivate/edit-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './03-CanDeactivate/confirm-dialog.component';
// Resolve 使用
import { UserDetailComponent } from './05-Resolve/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    EditProfileComponent,
    ConfirmDialogComponent,
    UserDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
