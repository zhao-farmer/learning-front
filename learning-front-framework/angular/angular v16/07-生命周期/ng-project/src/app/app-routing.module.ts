import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Rec01Component } from './01-rec/01.component';
import { Example01Component } from './02-example/01.component';
import { Example02Component } from './02-example/02.component';
import { Example03Component } from './02-example/03.component';
import { Example04Component } from './02-example/04.component';
import { Example05Component } from './02-example/05.component';
import { Example06Component } from './02-example/06.component';
import { Example07Component } from './02-example/07.component';
import { Example08Component } from './02-example/08.component';
import { Case02Component } from './03-case/02.component';

const routes: Routes = [
  {
    path: 'rec',
    children:[
       { path: '01',component: Rec01Component, title: '生命周期代码' },
    ]
  },
  {
    path: 'example',
    children: [
        { path: '01',component: Example01Component, title: '生命周期OnChanges' },
        { path: '02',component: Example02Component, title: '生命周期OnInit' },
        { path: '03',component: Example03Component, title: '生命周期DoCheck' },
        { path: '04',component: Example04Component, title: '生命周期AfterContentInit' },
        { path: '05',component: Example05Component, title: '生命周期AfterContentChecked' },
        { path: '06',component: Example06Component, title: '生命周期AfterViewInit' },
        { path: '07',component: Example07Component, title: '生命周期AfterViewChecked' },
        { path: '08',component: Example08Component, title: '生命周期OnDestroy' },
    ],
  },
  {
    path: 'case',
    component: Case02Component,
    title: '综合案例'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
