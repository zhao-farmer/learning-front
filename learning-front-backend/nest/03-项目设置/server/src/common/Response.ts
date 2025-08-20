import {CallHandler,ExecutionContext,Injectable,NestInterceptor,} from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface data<T> {
  data: T;
}

@Injectable()
export class Response<T = any> implements NestInterceptor {
  intercept( context: ExecutionContext, next: CallHandler<any>,): Observable<data<T>> {
    return next.handle().pipe(
      map((data) => {
        return {data, status: 0,success: true,message: '成功',};
      }),
    );
  }
}
