import { of } from "rxjs";
import { map, filter } from "rxjs/operators";

of(1, 2, 3)
    .pipe(map(x => x * 2))
    .subscribe(console.log);

of(1, 2, 3, 4, 5)
    .pipe(filter(x => x % 2 === 0))
    .subscribe(console.log);
