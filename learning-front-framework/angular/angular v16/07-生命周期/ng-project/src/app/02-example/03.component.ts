import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'example-03',
  template: `
    <p>计数器: {{ counter }}</p>
    <button (click)="increment()">增加</button>
  `,
})
export class Example03Component implements DoCheck {
  counter = 0;
  previousCounter = 0;

  increment() {
    this.counter++;
  }

  ngDoCheck() {
    console.log('ngDoCheck 触发');

    if (this.counter !== this.previousCounter) {
      console.log(`计数器从 ${this.previousCounter} 变为 ${this.counter}`);
      this.previousCounter = this.counter;
    }
  }
}
