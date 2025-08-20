import { throwError,of } from 'rxjs';
import { catchError } from 'rxjs/operators';

throwError(() => new Error('自定义错误')).pipe(
    catchError(err => {
        console.error('捕获错误:', err.message);
        return of('备用数据');
    })
).subscribe(console.log);