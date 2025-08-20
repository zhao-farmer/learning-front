import { Component } from '@angular/core';

@Component({
  selector: 'lazy-01',
  template:`
    <h1>懒加载路由1</h1>
  `
})
export class Lazy01Component {}


@Component({
  selector: 'lazy-02',
  template:`
    <h1>懒加载路由2</h1>
  `
})
export class Lazy02Component {}


@Component({
  selector: 'lazy-03',
  template:`
    <h1>懒加载路由3</h1>
  `
})
export class Lazy03Component {}
