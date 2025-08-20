import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent,AboutComponent,ContactComponent } from './01-routes/01.component';
import { UserProfileComponent } from './01-routes/02.component';
import { Product01Component,Product02Component,Product03Component } from './01-routes/03.component';
import { PageNotFoundComponent } from './01-routes/04.component';
import { Use01Component } from './03-use/01.component';
import { Use02Component } from './03-use/02.component';

const routes: Routes = [
  // 1. 路由重定向 - 默认路径重定向到首页
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // 2. 普通路由
  { path: 'home', component: HomeComponent, title: '首页' },
  { path: 'about', component: AboutComponent, title: '关于我们' },
  { path: 'contact', component: ContactComponent, title: '联系我们' },

  // 3. 带参数的路由
  { path: 'user/:id', component: UserProfileComponent },

  // 4. 含有子路由的路由
  {
    path: 'products',
    children: [
      { path: '', component: Product01Component }, // 默认子路由 /products
      { path: 'count', component: Product02Component },  // 普通路由
      { path: ':id', component: Product03Component } // /products/123
    ]
  },

  // 懒加载路由
  {
    path: 'lazy',
    loadChildren: () => import('./02-lazy/lazy.module').then(m => m.LazyModule)
  },

  // 使用路由导航
  {
    path: 'use',
    children: [
      { path: '01', component: Use01Component, title: '声明式路由' },
      { path: '02', component: Use02Component, title: '编程式导航' },
    ]
  },

  // 5. 404页面 - 通配符路由必须放在最后
  { path: '**', component: PageNotFoundComponent, title: '页面未找到' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
