import { of,interval,take,map } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

of('a', 'b', 'c').pipe(
    mergeMap(char => interval(1000).pipe(
        take(2),
        map(i => `${char}${i}`)
    ))
).subscribe(console.log);
