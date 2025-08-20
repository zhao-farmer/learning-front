import { timer } from 'rxjs';

timer(2000).subscribe(() => console.log('2秒后执行'));
// 输出：（2秒后）2秒后执行

timer(1000, 2000).subscribe(num => console.log(`第 ${num} 次执行`));
// 输出：
// 第 0 次执行（1秒后）
// 第 1 次执行（再等2秒）
// ...