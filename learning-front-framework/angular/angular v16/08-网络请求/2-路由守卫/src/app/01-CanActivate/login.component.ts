import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <div class="login-container">
      <h2>用户登录</h2>
      <form (ngSubmit)="onSubmit()">
        <div>
          <label>用户:</label>
          <input type="text" [(ngModel)]="username" name="username" required>
        </div>
        <div>
          <label>密码:</label>
          <input type="password" [(ngModel)]="password" name="password" required>
        </div>
        <button type="submit">登录</button>
      </form>
      <div *ngIf="error" class="error">{{ error }}</div>
    </div>
  `,
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';
  returnUrl = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // 获取当前用户跳转前的url 跳转后再次进入
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit(): void {
    // 使用 authService 判断是否登录
    if (this.authService.login(this.username, this.password)) {
      this.router.navigateByUrl(this.returnUrl);
    } else {
      this.error = 'Invalid credentials';
    }
  }
}
