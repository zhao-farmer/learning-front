import { of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';

of('任务1', '任务2', '任务3').pipe(
    concatMap(task => of(`完成: ${task}`).pipe(delay(1000)))
).subscribe(console.log);