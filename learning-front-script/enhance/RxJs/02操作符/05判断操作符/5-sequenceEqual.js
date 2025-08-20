import { of } from 'rxjs';
import { sequenceEqual } from 'rxjs/operators';

const source1$ = of(1, 2, 3);
const source2$ = of(1, 2, 3);

source1$.pipe(sequenceEqual(source2$))
.subscribe(result => console.log('序列是否相同？', result));