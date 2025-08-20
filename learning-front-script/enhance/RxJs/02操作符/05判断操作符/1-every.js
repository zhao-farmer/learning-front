import { of } from 'rxjs';
import { every } from 'rxjs/operators';

of(2, 4, 6, 8)
.pipe(every(x => x % 2 === 0))
.subscribe(result => console.log('是否全为偶数？', result));