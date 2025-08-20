import { Component, ViewChild } from '@angular/core';


// 子组件
@Component({
  selector: 'app-child-04',
  template: `<p>子组件内容</p>`
})
export class Child04Component {
  childStatus = '活跃';

  doSomething() {
    console.log('子组件方法被调用');
    this.childStatus = '处理中...';
  }
}

// 父组件
@Component({
  selector: 'app-parent-04',
  template: `
    <app-child-04 #childRef></app-child-04>
    <button (click)="callChildMethod()">调用子组件方法</button>
    <p>子组件状态: {{ childRef.childStatus }}</p>
  `
})
export class Parent04Component {
  @ViewChild('childRef') childComponent!: Child04Component;

  callChildMethod() {
    this.childComponent.doSomething();
  }
}
