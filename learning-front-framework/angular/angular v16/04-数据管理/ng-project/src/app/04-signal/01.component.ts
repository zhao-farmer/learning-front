import { Component, signal, computed } from '@angular/core';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'signal-01',
  template: `
    <h2>购物车</h2>
    <ul>
      <li *ngFor="let item of items()">
        {{ item.name }} - {{ item.price | currency }}
        <button (click)="updateQuantity(item.id, -1)">-</button>
        {{ item.quantity }}
        <button (click)="updateQuantity(item.id, 1)">+</button>
      </li>
    </ul>

    <div>总价: {{ totalPrice() | currency }}</div>
    <div *ngIf="hasDiscount()">折扣价: {{ discountedPrice() | currency }}</div>
  `,
})
export class Signal01Component {
  items = signal<CartItem[]>([
    { id: 1, name: 'Angular书', price: 99, quantity: 1 },
    { id: 2, name: 'RxJS指南', price: 89, quantity: 2 },
  ]);

  discount = signal(0.1); // 10%折扣

  // 计算属性
  totalPrice = computed(() =>
    this.items().reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  discountedPrice = computed(() => this.totalPrice() * (1 - this.discount()));

  hasDiscount = computed(() => this.discount() > 0);

  // 操作方法
  updateQuantity(id: number, change: number) {
    this.items.update((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + change } : item
      ).filter((item) => item.quantity > 0)
    );
  }
}
