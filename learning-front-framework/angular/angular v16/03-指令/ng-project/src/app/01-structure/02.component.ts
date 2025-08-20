import { Component } from '@angular/core';

@Component({
  selector: 'structure-02',
  template: `
    <div *ngIf="isLoggedIn; else loginPrompt">
      <p>欢迎回来, {{ userName }}!</p>
      <button (click)="logout()">退出登录</button>
    </div>

    <ng-template #loginPrompt>
      <p>请登录以查看内容</p>
      <button (click)="login()">登录</button>
    </ng-template>

    <div [hidden]="!hasMessages">
      <h3>您的消息</h3>
      <p>{{ message }}</p>
    </div>
  `,
})
export class Structure02Component {
  isLoggedIn = false;
  userName = '张三';
  hasMessages = true;
  message = '您有3条未读消息';

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }
}
