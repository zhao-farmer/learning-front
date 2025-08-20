import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'rxjs-02',
  template: `
    <div *ngIf="loading">加载中...</div>
    <div *ngIf="!loading">
      <p>用户数: {{ stats.users }}</p>
      <p>订单数: {{ stats.orders }}</p>
    </div>
  `
})
export class Rxjs02Component {
  stats = { users: 0, orders: 0 };
  loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    forkJoin({
      users: this.http.get<number>('http://localhost:3000/users-count'),
      orders: this.http.get<number>('http://localhost:3000/orders-count')
    }).subscribe({
      next: res => {
        this.stats = res;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
}
