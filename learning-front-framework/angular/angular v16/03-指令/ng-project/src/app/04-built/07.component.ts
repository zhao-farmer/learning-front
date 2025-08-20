import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'baseForml-01',
  template: `
   <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
    <input type="text" formControlName="username" placeholder="用户名">
    <input type="password" formControlName="password" placeholder="密码">

    <button type="submit" [disabled]="!loginForm.valid">登录</button>
  </form>

  <p>表单值: {{ loginForm.value | json }}</p>
  <p>表单状态: {{ loginForm.status }}</p>
  `,
})
export class BaseForm01Component {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  onSubmit() {
    console.log('提交的数据:', this.loginForm.value);
  }
}

