import { Component } from '@angular/core';

@Component({
  selector:"handler-01",
  template: `
    <button (click)="onClick()">点击我</button>
    <p>我的名字 {{ myname }}</p>
  `,
})
export class Handler01Component{
  myname = "未知"
  onClick(){
    this.myname = "张三"
  }
}
