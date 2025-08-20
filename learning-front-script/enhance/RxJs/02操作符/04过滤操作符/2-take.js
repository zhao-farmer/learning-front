import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

interval(1000).pipe(take(3))
.subscribe(console.log);