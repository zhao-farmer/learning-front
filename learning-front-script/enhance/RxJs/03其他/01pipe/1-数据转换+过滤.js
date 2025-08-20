import { of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const numbers$ = of(1, 2, 3, 4, 5);

numbers$.pipe(
    filter(x => x % 2 === 0), // 筛选偶数
    map(x => x * 2)           // 翻倍
).subscribe(console.log);