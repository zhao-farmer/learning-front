import { of } from 'rxjs';
import { first, last } from 'rxjs/operators';

of(1, 2, 3).pipe(first())
.subscribe(console.log); // 输出：1

of(1, 2, 3).pipe(last())
.subscribe(console.log); // 输出：3