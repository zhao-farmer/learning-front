import { pipe,of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

// 自定义操作符：筛选偶数并翻倍
const evenDouble = pipe(
    filter((x) => x % 2 === 0),
    map(x => x * 2)
);

of(1, 2, 3, 4).pipe(evenDouble).subscribe(console.log);