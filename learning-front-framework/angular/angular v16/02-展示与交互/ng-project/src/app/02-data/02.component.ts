import { Component } from '@angular/core';

@Component({
  selector: 'data-02',
  template: `
    <!-- 基本双向绑定 -->
    <input [(ngModel)]="username" placeholder="输入用户名">
    <p>当前用户名: {{ username }}</p>

    <!-- 复选框双向绑定 -->
    <input type="checkbox" [(ngModel)]="isAgreed">
    <label>我同意条款</label>

    <!-- 单选按钮双向绑定 -->
    <div>
      <input type="radio" [(ngModel)]="gender" value="male"> 男
      <input type="radio" [(ngModel)]="gender" value="female"> 女
    </div>
    <p>选择的性别: {{ gender }}</p>

    <!-- 下拉选择框双向绑定 -->
    <select [(ngModel)]="selectedCity">
      <option *ngFor="let city of cities" [value]="city">{{ city }}</option>
    </select>
    <p>选择的城市: {{ selectedCity }}</p>
  `
})
export class Data02Component {
  username = '';
  isAgreed = false;
  gender = 'male';
  cities = ['北京', '上海', '广州', '深圳'];
  selectedCity = '北京';
}
