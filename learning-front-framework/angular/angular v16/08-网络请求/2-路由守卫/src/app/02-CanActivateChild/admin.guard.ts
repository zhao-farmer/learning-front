import { CanActivateChildFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const adminGuard: CanActivateChildFn = (childRoute, state) => {

  // 改变role页面效果不同
  const user = {
    name: 'zhangsan',
    role: 'admin1',
  };

  const router = inject(Router);

  // 判断用户权限
  if ("admin" === user.role) {
    return true;
  }

  // 访问拒绝页面
  router.navigate(['/access-denied']);
  return false;
};
