import { Component, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  template: `<p>计时器: {{ count }}</p>`,
})
export class Example08Component implements OnDestroy {
  count = 0;
  private subscription: Subscription;

  constructor() {
    this.subscription = interval(1000).subscribe(() => {
      this.count++;
      console.log('计时:', this.count);
    });
  }

  ngOnDestroy() {
    console.log('ngOnDestroy 触发');
    this.subscription.unsubscribe();
    console.log('已取消订阅，清理资源');
    debugger
  }
}
