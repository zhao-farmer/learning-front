
import { Component } from '@angular/core';

@Component({
  selector: 'app-child-01',
  template: `<h1>Hello, {{name}}!</h1>`,
  styles: [`h1 { color: blue; }`]
})
export class Child01Component  {
  name = '我是子组件';
}


@Component({
  selector: 'app-parent-02',
  // 使用组件指令 app-child-01 调用了其他组件
  template: `
    <h2>{{name}}</h2>
    <app-child-01></app-child-01>
  `
})
export class Parent01Component {
  name = '父组件';
}
