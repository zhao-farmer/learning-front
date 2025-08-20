import { Component } from '@angular/core';

// 子组件
@Component({
  selector: 'projection-01-child',
  template: `
    <div class="child-component">
      <h2>子组件标题</h2>
      <ng-content></ng-content>
    </div>
  `
})
export class Projection01ChildComponent {}

// 父组件内容填充到子组件
@Component({
  selector: 'projection-01',
  template: `
    <projection-01-child>
      <p>这是投影到子组件中的内容</p>
    </projection-01-child>
  `,
})
export class Projection01Component {}
