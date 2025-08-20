import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// CanActivateFn 使用
import { LoginComponent } from './01-CanActivate/login.component';
import { HomeComponent } from './01-CanActivate/home.component';
import { authGuard } from './01-CanActivate/auth.guard';

// CanActivateChild 使用
import { adminGuard } from './02-CanActivateChild/admin.guard';
import { Child01Component,Child02Component,Child03Component } from './02-CanActivateChild/child.componet';
import { AccessDeniedComponent } from './02-CanActivateChild/access-denied.component';

// CanDeactivate 使用
import { unsavedChangesGuard } from './03-CanDeactivate/unsaved-changes.guard';
import { EditProfileComponent } from './03-CanDeactivate/edit-profile.component';

// CanMatch 使用
import { adminModuleGuard } from './04-CanMatch/admin-module.guard';

// Resolve
import { UserDetailComponent } from './05-Resolve/user-detail.component';
import { userResolver } from './05-Resolve/user.resolver';



const routes: Routes = [
  // 登录
  { path: 'login', component: LoginComponent },
  // 自动跳转到主页
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // 使用authGuard进行路由守卫
  { path: 'home', component: HomeComponent,canActivate: [authGuard]},

  // 权限不足页面
  { path: 'access-denied', component: AccessDeniedComponent},
  {
    path: 'admin',
    children:[
      { path: '', redirectTo: '01', pathMatch: 'full' },
      { path: '01', component: Child01Component, title: '子页面1' },
      { path: '02', component: Child02Component, title: '子页面2' },
      { path: '03', component: Child03Component, title: '子页面3' },
    ],
    // 判断子路由守卫是否有权限
    canActivateChild: [adminGuard]
  },

  {
    path: 'profile',
    component: EditProfileComponent,
    // 判断表单是否提交了
    canDeactivate: [unsavedChangesGuard]
  },
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule),
    canMatch: [adminModuleGuard]  // 使用 canMatch 替代 canLoad
  },
  {
    path: 'user/:id',
    component: UserDetailComponent,
    resolve: { user: userResolver }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
