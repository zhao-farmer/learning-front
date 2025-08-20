import { Component } from '@angular/core';
import { DataService } from '../data.service';

// 子组件
@Component({
  selector: 'app-child-05',
  template: `
    <p>来自服务的消息: {{ serviceMessage }}</p>
    <button (click)="sendCount()">通过服务发送计数</button>
  `
})
export class Child05Component {
  serviceMessage = '';

  constructor(private dataService: DataService) {
    this.dataService.parentToChild$.subscribe(msg => {
      this.serviceMessage = msg;
    });
  }

  sendCount() {
    this.dataService.sendToParent(Math.floor(Math.random() * 100));
  }
}

// 父组件
@Component({
  selector: 'app-parent-05',
  template: `
    <button (click)="sendMessage()">通过服务发送</button>
    <app-child-05></app-child-05>
    <p>来自服务的计数: {{ serviceCount }}</p>
  `
})
export class Parent05Component {
  serviceCount = 0;

  constructor(private dataService: DataService) {
    this.dataService.childToParent$.subscribe(count => {
      this.serviceCount = count;
    });
  }

  sendMessage() {
    this.dataService.sendToChild('通过服务传递的消息');
  }
}
