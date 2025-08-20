import { of } from "rxjs";
import { scan } from "rxjs/operators";

of(1, 2, 3)
    .pipe(scan((acc, curr) => acc + curr, 0))
    .subscribe(console.log);
