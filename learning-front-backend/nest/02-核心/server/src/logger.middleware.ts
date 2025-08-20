import { Injectable, NestMiddleware } from '@nestjs/common';

import { Request, Response, NextFunction } from 'express';

@Injectable()
export class Logger implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('拦截经过');
    // send返回不会再进行next
    // res.send('直接拦截了，不进行下一步');
    // 继续进行下一步
    next();
  }
}
