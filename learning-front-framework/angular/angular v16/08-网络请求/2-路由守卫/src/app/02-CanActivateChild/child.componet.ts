import { Component } from '@angular/core';

// 子路由1
@Component({
  selector: 'child-route-01',
  template: `
    <h1>子路由1</h1>
  `,
})
export class Child01Component {}

// 子路由2
@Component({
  selector: 'child-route-02',
  template: `
    <h1>子路由2</h1>
  `,
})
export class Child02Component {}

// 子路由3
@Component({
  selector: 'child-route-03',
  template: `
    <h1>子路由3</h1>
  `,
})
export class Child03Component {}
