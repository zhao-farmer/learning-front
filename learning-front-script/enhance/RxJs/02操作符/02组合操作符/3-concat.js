import { concat, of } from 'rxjs';

const first$ = of('第一步');
const second$ = of('第二步');

concat(first$, second$).subscribe(console.log);

// 输出：
// 第一步
// 第二步
