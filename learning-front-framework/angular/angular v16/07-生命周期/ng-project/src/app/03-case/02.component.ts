// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'case-02',
  template: `
    <h1>Angular 生命周期演示</h1>

    <app-user-counter
      [initialCount]="initialCount"
      [maxCount]="maxCount">

      <div #projectedContent class="projected-content">
        这是投影到计数器组件中的内容
      </div>
    </app-user-counter>

    <div class="controls">
      <button (click)="changeInitialCount()">更改初始计数</button>
      <button (click)="changeMaxCount()">更改最大计数</button>
      <button (click)="toggleCounter()">{{showCounter ? '移除' : '添加'}}计数器</button>
    </div>
  `,
  styles: [`
    .projected-content {
      padding: 10px;
      background-color: #eef;
      margin: 10px 0;
    }
    .controls {
      margin: 20px;
    }
    button {
      margin-right: 10px;
    }
  `]
})
export class Case02Component {
  initialCount = 3;
  maxCount = 5;
  showCounter = true;

  changeInitialCount() {
    this.initialCount = Math.floor(Math.random() * 5) + 1;
  }

  changeMaxCount() {
    this.maxCount = Math.floor(Math.random() * 10) + 5;
  }

  toggleCounter() {
    this.showCounter = !this.showCounter;
  }
}
