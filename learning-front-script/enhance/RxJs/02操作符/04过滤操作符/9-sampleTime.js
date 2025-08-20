import { interval } from 'rxjs';
import { sampleTime } from 'rxjs/operators';

interval(100).pipe(sampleTime(1000))
.subscribe(console.log);