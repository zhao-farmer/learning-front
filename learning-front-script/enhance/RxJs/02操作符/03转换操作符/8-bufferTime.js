import { interval } from 'rxjs';
import { bufferTime } from 'rxjs/operators';

interval(1000).pipe(bufferTime(3000))
.subscribe(console.log);