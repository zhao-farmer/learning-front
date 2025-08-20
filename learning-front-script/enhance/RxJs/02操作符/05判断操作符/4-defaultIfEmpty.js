import { EMPTY } from 'rxjs';
import { defaultIfEmpty } from 'rxjs/operators';

EMPTY.pipe(defaultIfEmpty('暂无数据'))
.subscribe(console.log); // 输出：'暂无数据'