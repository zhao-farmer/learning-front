import { Component } from '@angular/core';

@Component({
  selector: 'class-01',
  template: `
    <p [class.active]="showType">被改变样式的文字</p>
    <button (click)="changeColor()">点击后改变颜色</button>
  `,
  styles:[`
    .active {
      font-weight: bold;
      color: red;
      font-size:20px;
    }
  `]
})
export class Class01Component {
  showType = false
  changeColor(){
    this.showType = !this.showType
  }
}
