import { Controller, Get, SetMetadata, UseGuards } from '@nestjs/common';
import { RoleGuard } from './role/role.guard';
import { Role, ReqUrl } from './role/role.decorator';

@UseGuards(RoleGuard)
@Controller('guard')
export class GuardController {
  @Get('verify1')
  verify1() {
    return '验证 controller 中的守卫';
  }

  @Get('verifyRole')
  @SetMetadata('role', ['admin'])
  verifyRole() {
    return '验证 角色控制';
  }

  @Get('verifyDecorator')
  @Role('admin')
  verifyDecorator() {
    return '验证 自定义装饰器';
  }

  @Get('verifyReqUrl')
  @Role('admin')
  verifyReqUrl(@ReqUrl() url) {
    return '返回的是url路径' + url;
  }
}
