import { Component, OnInit, OnDestroy,ViewChild,ElementRef } from '@angular/core';
import { MessageService } from '../message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rxjs-sender',
  template: `
    <input type="text" #content>
    <button (click)="send()">发送消息</button>
  `,
})
export class SenderComponent {

  // 依赖注入
  constructor(private messageService: MessageService) {}

  // 使用ref 绑定对象
  @ViewChild('content') contentStr!: ElementRef;

  // 通过中间的消息组件进行发送
  send() {
    this.messageService.send(this.contentStr.nativeElement.value);
  }
}

@Component({
  selector: 'rxjs-receiver',
  template: `<div>收到: {{ message }}</div>`,
})
export class ReceiverComponent implements OnInit, OnDestroy {
  message = '';

  // rxjs的 Subscription 对象
  private sub: Subscription = new Subscription();

  // 依赖注入
  constructor(private messageService: MessageService) {}

  // 初始化后绑定监控
  ngOnInit() {
    this.sub =  this.messageService.messages$.subscribe(value => {
         this.message = value
      }
    );
  }
  // 页面销毁后 同样销毁
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// 这种兄弟组件的通信 只有同一个页面中才能使用
@Component({
  template: `
    <rxjs-sender/>
    <hr>
    <rxjs-receiver/>
  `,
})
export class Rxjs03Component{}
