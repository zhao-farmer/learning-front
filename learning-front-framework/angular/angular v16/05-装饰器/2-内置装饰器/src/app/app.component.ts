import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>用户资料系统</h1>
    <app-user-profile
      [userId]="1"
      (profileUpdated)="onProfileUpdate($event)">
    </app-user-profile>
  `,
})
export class AppComponent {
  onProfileUpdate(event: any) {
    console.log('收到资料更新事件:', event);
    // 这里可以添加实际的处理逻辑
  }
}
