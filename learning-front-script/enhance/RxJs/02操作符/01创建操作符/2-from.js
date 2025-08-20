import { from } from 'rxjs';

from([1, 2, 3]).subscribe(console.log);
// 输出：1, 2, 3

const promise = Promise.resolve('Hello RxJS');
from(promise).subscribe(console.log);
// 输出：Hello RxJS

from('RxJS').subscribe(console.log);
// 输出：R, x, J, S