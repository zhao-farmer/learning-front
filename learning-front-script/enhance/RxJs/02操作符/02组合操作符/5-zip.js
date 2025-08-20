import { zip,of } from 'rxjs';

const age$ = of(25, 30, 35);
const name$ = of('Alice', 'Bob');

zip(age$, name$).subscribe(console.log);