import { asyncScheduler,Observable } from 'rxjs';

const observable = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  asyncScheduler.schedule(() => {
    subscriber.next(3);
    subscriber.complete();
  }, 1000);
});

observable.subscribe(console.log);

// 输出：
// 1
// 2
// （1秒后）
// 3