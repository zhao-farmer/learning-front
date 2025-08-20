import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.model';

export const userResolver: ResolveFn<User> = (route, state) => {
  const userService = inject(UserService);
  // 获取路由中的 id
  const userId = parseInt(route.paramMap.get('id')!);

  // 通过 id 查询数据
  return userService.getUser(userId);
};
