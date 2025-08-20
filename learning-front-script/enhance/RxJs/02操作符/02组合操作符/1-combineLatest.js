import { combineLatest, interval } from 'rxjs';
import { take } from 'rxjs/operators';

const timer1$ = interval(1000).pipe(take(3)); // 0, 1, 2（每秒一次）
const timer2$ = interval(1500).pipe(take(2)); // 0, 1（每1.5秒一次）

combineLatest([timer1$, timer2$]).subscribe(console.log);
// [ 0, 0 ]
// [ 1, 0 ]
// [ 1, 1 ]
// [ 2, 1 ]