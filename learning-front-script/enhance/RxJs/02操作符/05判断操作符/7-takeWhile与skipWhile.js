import { of } from 'rxjs';
import { takeWhile, skipWhile } from 'rxjs/operators';

of(1, 2, 3, 4, 5).pipe(takeWhile(x => x < 4))
.subscribe(console.log); // 输出：1, 2, 3（遇到4时停止）

of(1, 2, 3, 4, 5).pipe(skipWhile(x => x < 3))
.subscribe(console.log); // 输出：3, 4, 5（跳过1和2）