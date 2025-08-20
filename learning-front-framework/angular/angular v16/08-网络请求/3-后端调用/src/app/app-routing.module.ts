import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpComponent } from './01-http/01.component';

const routes: Routes = [
  {
    path: 'http',
    component: HttpComponent,
    title: 'http请求'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
