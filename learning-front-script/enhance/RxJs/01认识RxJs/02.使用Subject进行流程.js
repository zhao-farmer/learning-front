import { Subject } from 'rxjs';

const subject = new Subject();

// 订阅 Subject（多个观察者）
subject.subscribe(value => console.log('观察者A:', value));
subject.subscribe(value => console.log('观察者B:', value));

// 发送数据（所有订阅者都会收到）
subject.next(1);
subject.next(2);

// 输出：
// 观察者A: 1
// 观察者B: 1
// 观察者A: 2
// 观察者B: 2