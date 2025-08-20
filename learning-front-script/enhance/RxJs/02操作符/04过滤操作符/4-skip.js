import { of } from 'rxjs';
import { skip } from 'rxjs/operators';

of('A', 'B', 'C', 'D').pipe(skip(2))
.subscribe(console.log);