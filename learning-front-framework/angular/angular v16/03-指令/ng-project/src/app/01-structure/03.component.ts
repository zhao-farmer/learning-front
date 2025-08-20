import { Component } from '@angular/core';

@Component({
  selector: 'switch-01',
  template: `
    <h3>用户状态显示</h3>

    <select [(ngModel)]="userStatus">
      <option value="active">活跃</option>
      <option value="inactive">非活跃</option>
      <option value="pending">待审核</option>
    </select>

    <div [ngSwitch]="userStatus">
      <div *ngSwitchCase="'active'">✅ 用户处于活跃状态</div>
      <div *ngSwitchCase="'inactive'">⏸️ 用户非活跃</div>
      <div *ngSwitchCase="'pending'">⏳ 用户等待审核中</div>
      <div *ngSwitchDefault>❓ 未知状态</div>
    </div>

    <h4>消息类型</h4>
    <div [ngSwitch]="messageType">
      <div *ngSwitchCase="'success'">🎉 操作成功！</div>
      <div *ngSwitchCase="'error'">❗ 发生错误</div>
      <div *ngSwitchDefault>ℹ️ 普通信息</div>
    </div>
  `
})
export class Switch01Component {
  userStatus = 'active';
  messageType = 'info';
}
