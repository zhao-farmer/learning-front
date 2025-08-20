import { Component } from '@angular/core';

// 子组件
@Component({
  selector: 'projection-02-child',
  template: `
    <div class="card">
      <div class="header">
        <ng-content select="[card-header]"></ng-content>
      </div>
      <div class="content">
        <ng-content select="[card-content]"></ng-content>
      </div>
      <div class="footer">
        <ng-content select="[card-footer]"></ng-content>
      </div>
    </div>
  `
})
export class Projection02ChildComponent {}

// 父组件内容填充到子组件
@Component({
  selector: 'projection-02',
  template: `
    <projection-02-child>
      <div card-header>卡片标题</div>
      <div card-content>卡片内容...</div>
      <div card-footer>卡片页脚</div>
    </projection-02-child>
  `,
})
export class Projection02Component {}
