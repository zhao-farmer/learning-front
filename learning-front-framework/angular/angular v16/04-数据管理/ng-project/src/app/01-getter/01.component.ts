import { Component } from '@angular/core';

@Component({
  selector: 'getter-01',
  template: `
    <h2>用户信息</h2>
    <p>全名: {{ fullName }}</p>
    <p>年龄: {{ age }} 岁</p>
    <p>出生年份: {{ birthYear }}</p>
  `,
})
export class Getter01Component {
  firstName = '张';
  lastName = '三';
  age = 30;

  // Getter 方法 - 计算全名
  get fullName(): string {
    return `${this.lastName}${this.firstName}`;
  }

  // Getter 方法 - 计算出生年份
  get birthYear(): number {
    const currentYear = new Date().getFullYear();
    return currentYear - this.age;
  }
}
