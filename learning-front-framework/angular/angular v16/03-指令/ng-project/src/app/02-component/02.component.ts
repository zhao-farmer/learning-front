import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-02',
  template: `
    <h3>子组件</h3>
    <p>来自父组件的消息: {{ messageFromParent }}</p>
    <p>用户年龄: {{ user.age }}</p>
  `
})
export class Child02Component {
  // 使用input接收父组件的消息
  @Input() messageFromParent: string = '';
  @Input() user: any = {};
}

@Component({
  selector: 'app-parent-02',
  template: `
    <h2>父组件</h2>
    <app-child-02
      [messageFromParent]="parentMessage"
      [user]="currentUser">
    </app-child-02>
  `
})
export class Parent02Component {
  parentMessage = '你好，子组件！';
  currentUser = { name: '张三', age: 30 };
}
