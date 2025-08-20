import { Component } from '@angular/core';

// 默认子路由
@Component({
  selector: 'route-product-01',
  template: `
    <h1>默认子路由</h1>
  `,
})
export class Product01Component {}

// 普通路由
@Component({
  selector: 'route-product-02',
  template: `
    <h1>普通路由</h1>
  `,
})
export class Product02Component {}

// 带参数路由
@Component({
  selector: 'route-product-03',
  template: `
    <h1>带参数路由</h1>
  `,
})
export class Product03Component {}
