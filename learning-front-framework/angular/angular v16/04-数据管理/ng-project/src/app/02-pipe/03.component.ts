import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'pipe-03',
  template: `
    <h2>异步数据展示</h2>

    <div *ngIf="userData$ | async as user; else loading">
      <p>姓名: {{ user.name }}</p>
      <p>角色: {{ user.role }}</p>
    </div>

    <ng-template #loading>
      <p>加载中...</p>
    </ng-template>

    <h3>消息列表</h3>
    <ul>
      <li *ngFor="let message of messages$ | async">
        {{ message }}
      </li>
    </ul>
  `,
})
export class Pipe03Component {
  userData$: Observable<any>;
  messages$: Observable<string[]>;

  constructor() {
    // 模拟异步数据
    this.userData$ = of({
      name: '王五',
      role: '管理员',
    }).pipe(delay(2000)); // 延迟2秒模拟网络请求

    this.messages$ = of(['系统维护通知', '新版本发布', '安全提醒']).pipe(
      delay(1000)
    );
  }
}
