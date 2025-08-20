import { interval } from 'rxjs';

interval(1000).subscribe(num => console.log(`当前计数: ${num}`));
// 输出：
// 当前计数: 0（1秒后）
// 当前计数: 1（2秒后）
// ...