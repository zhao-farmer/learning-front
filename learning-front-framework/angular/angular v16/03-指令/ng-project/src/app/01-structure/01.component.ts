import { Component } from '@angular/core';

@Component({
  selector: 'structure-01',
  template: `
    <h2>产品列表</h2>
    <ul>
      <li *ngFor="let product of products; let i = index">
        {{ i + 1 }}. {{ product.name }} - {{ product.price }}
      </li>
    </ul>

    <h2>带条件的列表</h2>
    <div *ngFor="let user of users">
      <div *ngIf="user.active" class="user-card">
        {{ user.name }} ({{ user.email }})
      </div>
    </div>
  `,
  styles: [
    `
      .user-card {
        padding: 10px;
        margin: 5px;
        border: 1px solid #ddd;
      }
    `,
  ],
})
export class Structure01Component {
  products = [
    { name: '笔记本电脑', price: 5999 },
    { name: '智能手机', price: 2999 },
    { name: '平板电脑', price: 1999 },
  ];

  users = [
    { name: '张三', email: 'zhang@example.com', active: true },
    { name: '李四', email: 'li@example.com', active: false },
    { name: '王五', email: 'wang@example.com', active: true },
  ];
}
