import { iif, of } from 'rxjs';

let isAdmin = true;
const adminData$ = of('管理员数据');
const userData$ = of('普通用户数据');

iif( () => isAdmin, adminData$,userData$)
    .subscribe(console.log);