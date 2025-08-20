// components/counter.component.ts
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  increment,
  decrement,
  reset,
  add,
  setLoading
} from '../store/counter/counter.actions';
import {
  selectCount,
  selectDoubleCount,
  selectCounterLoading
} from '../store/counter/counter.selectors';

@Component({
  selector: 'app-counter',
  template: `
    <div class="counter">
      <h2>计数器示例</h2>

      <div *ngIf="loading$ | async" class="loading">加载中...</div>

      <p>当前值: {{ count$ | async }}</p>
      <p>双倍值: {{ doubleCount$ | async }}</p>

      <div class="buttons">
        <button (click)="onIncrement()" [disabled]="loading$ | async">+1</button>
        <button (click)="onDecrement()" [disabled]="loading$ | async">-1</button>
        <button (click)="onAdd(5)" [disabled]="loading$ | async">+5</button>
        <button (click)="onReset()" [disabled]="loading$ | async">重置</button>
        <button (click)="toggleLoading()">
          {{ (loading$ | async) ? '停止加载' : '开始加载' }}
        </button>
      </div>
    </div>
  `,
  styles: [`
    .counter { padding: 20px; border: 1px solid #ccc; margin: 10px; }
    .loading { color: blue; font-weight: bold; }
    .buttons button { margin: 5px; padding: 8px 12px; }
    button:disabled { opacity: 0.5; }
  `]
})
export class CounterComponent {
  private store = inject(Store);

  count$: Observable<number> = this.store.select(selectCount);
  doubleCount$: Observable<number> = this.store.select(selectDoubleCount);
  loading$: Observable<boolean> = this.store.select(selectCounterLoading);

  onIncrement() {
    this.store.dispatch(increment());
  }

  onDecrement() {
    this.store.dispatch(decrement());
  }

  onAdd(value: number) {
    this.store.dispatch(add({ value }));
  }

  onReset() {
    this.store.dispatch(reset());
  }

  toggleLoading() {
    this.store.dispatch(setLoading({ loading: !(this.loading$) }));
  }
}
