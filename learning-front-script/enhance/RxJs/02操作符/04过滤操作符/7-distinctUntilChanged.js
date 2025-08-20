import { of } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

of(1, 1, 2, 2, 3, 2).pipe(distinctUntilChanged())
.subscribe(console.log);