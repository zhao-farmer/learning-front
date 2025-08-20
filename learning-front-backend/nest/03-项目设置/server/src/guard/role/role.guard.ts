import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import type { Request } from 'express';

@Injectable()
export class RoleGuard implements CanActivate {
  // 依赖注入
  constructor(private Reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // 反射获取设置的信息
    // string[] 返回类型 自身设置
    // role SetMetadata 中设置的key
    const admin = this.Reflector.get<string[]>('role', context.getHandler());
    // 获取前端传入的 Request 对象
    const request = context.switchToHttp().getRequest<Request>();
    // 传入参数化中含有的角色
    // 一般是根据token获取用户，然后根据用户角色去验证，这里省略了
    if (admin.includes(request.query.role as string)) {
      // 验证通过
      return true;
    } else {
      // 验证不通过 会报错
      return false;
    }
  }
}
