import { Component } from '@angular/core';

@Component({
  selector: 'getter-03',
  template: `
    <p>斐波那契数列第 {{ n }} 项: {{ fibonacci }}</p>
    <button (click)="n = n + 1">下一项</button>
  `,
})
export class Getter03Component {
  private _fibCache = new Map<number, number>();
  n = 10;

  get fibonacci(): number {
    return this.calculateFib(this.n);
  }

  private calculateFib(n: number): number {
    if (this._fibCache.has(n)) {
      return this._fibCache.get(n)!;
    }

    if (n <= 1) {
      this._fibCache.set(n, n);
      return n;
    }

    const result = this.calculateFib(n - 1) + this.calculateFib(n - 2);
    this._fibCache.set(n, result);
    return result;
  }
}
