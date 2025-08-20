import { Component } from '@angular/core';

@Component({
  selector: 'getter-02',
  template: `
    <div *ngFor="let product of products">
      <h3>{{ product.name }}</h3>
      <p>折扣价: {{ getDiscountedPrice(product) | currency }}</p>
    </div>
  `,
})
export class Getter02Component {
  discountRate = 0.8;
  products = [
    { id: 1, name: '笔记本', price: 5000 },
    { id: 2, name: '手机', price: 3000 },
  ];

  // 返回计算函数
  get getDiscountedPrice(): (product: any) => number {
    return (product) => product.price * this.discountRate;
  }
}
