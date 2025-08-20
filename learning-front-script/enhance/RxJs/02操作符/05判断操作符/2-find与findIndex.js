import { of } from 'rxjs';
import { find, findIndex } from 'rxjs/operators';

of(10, 20, 30, 40)
.pipe(find(x => x > 25))
.subscribe(console.log); // 输出：30

of(10, 20, 30, 40)
.pipe(findIndex(x => x > 25))
.subscribe(console.log); // 输出：2（索引值）