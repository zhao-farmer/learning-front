import { of } from 'rxjs';
import { toArray } from 'rxjs/operators';

of(1, 2, 3).pipe(toArray())
.subscribe(console.log);