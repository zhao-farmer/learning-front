import { Component } from '@angular/core';

// 子组件
@Component({
  selector: 'projection-03-child',
  template: `
    <button (click)="showContent = !showContent">切换内容</button>
    <div *ngIf="showContent">
      <ng-content></ng-content>
    </div>
  `
})
export class Projection03ChildComponent {
  showContent:boolean = true
}

// 父组件内容填充到子组件
@Component({
  selector: 'projection-02',
  template: `
    <projection-03-child>
      <p>按条件展示内容</p>
    </projection-03-child>
  `,
})
export class Projection03Component {}
