import { defer, of } from 'rxjs';

const random$ = defer(() => of(Math.random()));
random$.subscribe(console.log); // 每次订阅生成新的随机数