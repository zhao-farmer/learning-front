import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
   {
    path: 'home',           // 路径
    component: Home,        // 模块
    title: 'Home Page'      // 动态标题
  },
];
