import { Component } from '@angular/core';

@Component({
  // 一定要已字母开头
  selector:"data-01",
  // html代码直接写在这里
   template: `
    <h1>{{ title }}</h1>
    <p>当前用户: {{ currentUser.name }}</p>
    <!-- 内置了DatePipe 可以直接格式化 -->
    <p>注册时间: {{ currentUser.joinDate }}</p>
    <p>状态: {{ isActive ? '活跃' : '未激活' }}</p>
  `,
})
export class Data01Component{
  title = '用户信息';
  currentUser = {
    name: '张三',
    joinDate:  new Date(2020, 5, 15)
  };
  isActive = true;
}
