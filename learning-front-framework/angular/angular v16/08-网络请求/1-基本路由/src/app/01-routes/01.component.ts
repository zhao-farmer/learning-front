import { Component } from '@angular/core';

// 普通路由
@Component({
  selector: 'route-home',
  template: `
    <h1>首页</h1>
    <span>可重定向进入</span>
  `,
})
export class HomeComponent {}

// 普通路由
@Component({
  selector: 'route-about',
  template: `
    <h1>关于</h1>
  `,
})
export class AboutComponent {}

// 普通路由
@Component({
  selector: 'route-contact',
  template: `
    <h1>内容</h1>
  `,
})
export class ContactComponent {}
