import { interval, map, take, combineLatestAll } from "rxjs";

const source$ = interval(1000).pipe(
    take(2),
    map(i =>
        interval(1000).pipe(
            take(3),
            map(j => `源${i}: 值${j}`)
        )
    )
);

source$.pipe(combineLatestAll()).subscribe(console.log);
