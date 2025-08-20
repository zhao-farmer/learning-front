import { Component } from '@angular/core';

@Component({
  // 一定要已字母开头
  selector:"oc-01",
  // html代码直接写在这里
  template:`
    <h1>单模块应用</h1>
  `,
  // css代码 写在这里
  styles: [`
    h1 { color: red }
  `]
})
export class Oc01Component{
  title = "单模块应用"
}
