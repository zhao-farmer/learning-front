import { Component } from '@angular/core';

@Component({
  selector: 'ngMode-01',
  template: `
   <input
      type="email"
      name="email"
      [(ngModel)]="userEmail"
      required
      email
      #emailCtrl="ngModel">

    <div *ngIf="emailCtrl.invalid && emailCtrl.touched">
      <div *ngIf="emailCtrl.errors?.['required']">邮箱必填</div>
      <div *ngIf="emailCtrl.errors?.['email']">邮箱格式不正确</div>
    </div>

    <p>控件状态:
      Valid: {{ emailCtrl.valid }},
      Touched: {{ emailCtrl.touched }},
      Dirty: {{ emailCtrl.dirty }}
    </p>
  `,
})
export class NgModel01Component {
  userEmail:string = ''
}


@Component({
  selector: 'ngModelGroup-01',
  template: `
   <form #userForm="ngForm">

      <!-- 单个字段 -->
      <div>
        <label>用户名:</label>
        <input [(ngModel)]="user.username" name="username" placeholder="输入用户名">
      </div>

      <!-- 地址信息分组 -->
      <div ngModelGroup="address" style="border: 1px solid #ccc; padding: 10px; margin: 10px 0;">
        <h3>地址信息</h3>

        <div>
          <label>街道:</label>
          <input [(ngModel)]="user.address.street" name="street" placeholder="输入街道">
        </div>

        <div>
          <label>城市:</label>
          <input [(ngModel)]="user.address.city" name="city" placeholder="输入城市">
        </div>

        <div>
          <label>邮编:</label>
          <input [(ngModel)]="user.address.zipCode" name="zipCode" placeholder="输入邮编">
        </div>
      </div>

      <!-- 显示表单值 -->
      <div style="margin-top: 20px;">
        <h4>当前表单值:</h4>
        <pre>{{ userForm.value | json }}</pre>
      </div>

    </form>
  `,
})
export class NgModelGroup01Component {
  user = {
    username: '',
    address: {
      street: '',
      city: '',
      zipCode: ''
    }
  };
}
