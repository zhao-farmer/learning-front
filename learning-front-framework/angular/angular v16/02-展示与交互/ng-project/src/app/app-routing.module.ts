import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Oc01Component } from './01-oc/01.component';
import { Data01Component } from './02-data/01.component';
import { Data02Component } from './02-data/02.component';
import { Data03Component } from './02-data/03.component';
import { Handler01Component } from './03-handler/01.component';
import { Handler02Component } from './03-handler/02.component';
import { Handler03Component } from './03-handler/03.component';
import { Handler04Component } from './03-handler/04.component';
import { Handler05Component } from './03-handler/05.component';


const routes: Routes = [
  {
    path: 'oc-01',
    component: Oc01Component,
    title: '单模块应用',
  },
  {
    path: 'data',
    children: [
        { path: '01',component: Data01Component, title: '单向绑定' },
        { path: '02',component: Data02Component, title: '双向绑定' },
        { path: '03',component: Data03Component, title: '属性绑定' },
    ],
  },
  {
    path: 'handler',
    children: [
        { path: '01',component: Handler01Component, title: '事件绑定基础' },
        { path: '02',component: Handler02Component, title: '鼠标事件' },
        { path: '03',component: Handler03Component, title: '键盘事件' },
        { path: '04',component: Handler04Component, title: '表单事件' },
        { path: '05',component: Handler05Component, title: '拖拽事件' },
        { path: '06',component: Handler05Component, title: '剪贴板事件' },
        { path: '07',component: Handler05Component, title: '事件修饰符' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
