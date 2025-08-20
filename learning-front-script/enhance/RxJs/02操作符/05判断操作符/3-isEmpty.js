import { of, EMPTY } from 'rxjs';
import { isEmpty } from 'rxjs/operators';

EMPTY.pipe(isEmpty())
.subscribe(console.log); // 输出：true（流为空）

of(1).pipe(isEmpty())
.subscribe(console.log); // 输出：false（流非空）