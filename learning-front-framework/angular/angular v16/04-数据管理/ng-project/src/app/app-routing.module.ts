import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Getter01Component } from './01-getter/01.component';
import { Getter02Component } from './01-getter/02.component';
import { Getter03Component } from './01-getter/03.component';
import { Pipe01Component } from './02-pipe/01.component';
import { Pipe02Component } from './02-pipe/02.component';
import { Pipe03Component } from './02-pipe/03.component';
import { Pipe04Component } from './02-pipe/04.component';
import { Rxjs01Component } from './03-rxjs/01.component';
import { Rxjs02Component } from './03-rxjs/02.component';
import { Rxjs03Component } from './03-rxjs/03.component';
import { Rxjs04Component } from './03-rxjs/04.component';
import { Rxjs05Component } from './03-rxjs/05.component';
import { Signal01Component } from './04-signal/01.component';
import { Projection01Component } from './05-projection/01.component';
import { Projection02Component } from './05-projection/02.component';
import { Projection03Component } from './05-projection/03.component';


const routes: Routes = [
  {
    path: 'getter',
    children: [
        { path: '01',component: Getter01Component, title: '基本用法' },
        { path: '02',component: Getter02Component, title: '带参数的 Getter 方法' },
        { path: '03',component: Getter03Component, title: '缓存计算结果' },
    ],
  },
  {
    path: 'pipe',
    children: [
        { path: '01',component: Pipe01Component, title: '基本用法' },
        { path: '02',component: Pipe02Component, title: '复杂管道' },
        { path: '03',component: Pipe03Component, title: '管道异步数据' },
        { path: '04',component: Pipe04Component, title: '自定义管道' },
    ],
  },
  {
    path: 'rxjs',
    children: [
        { path: '01',component: Rxjs01Component, title: '搜索框防抖' },
        { path: '02',component: Rxjs02Component, title: '合并数据' },
        { path: '03',component: Rxjs03Component, title: '兄弟组件通信' },
        { path: '04',component: Rxjs04Component, title: '自动取消订阅' },
        { path: '05',component: Rxjs05Component, title: ' 表单值变化监听' },
    ],
  },
  {
    path: 'signal',
    component: Signal01Component,
    title: '案例：购物车'
  },
  {
    path: 'projection',
    children: [
        { path: '01',component: Projection01Component, title: '单插槽投影' },
        { path: '02',component: Projection02Component, title: '多插槽投影' },
        { path: '03',component: Projection03Component, title: '按条件投影' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
