import { range } from 'rxjs';

range(5, 3).subscribe(console.log); // 从5开始，发出3个数字
// 输出：5, 6, 7