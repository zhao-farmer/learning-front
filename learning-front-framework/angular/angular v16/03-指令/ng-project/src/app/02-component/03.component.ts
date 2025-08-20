import { Component, Output, EventEmitter } from '@angular/core';

// 子组件
@Component({
    selector: 'app-child-03',
    template: `
        <button (click)="sendMessage()">发送消息给父组件</button>
        <button (click)="updateCount()">增加计数</button>
    `
})
export class Child03Component {
    // 绑定父组件的方法
    @Output() messageEvent = new EventEmitter<string>();
    @Output() countChanged = new EventEmitter<number>();

    private count = 0;

    sendMessage() {
        // 通过emit传递
        this.messageEvent.emit('来自子组件的问候!');
    }

    updateCount() {
        this.count++;
        this.countChanged.emit(this.count);
    }
}

// 父组件
@Component({
    selector: 'app-parent-03',
    template: `
        <h2>父组件</h2>
        <p>来自子组件的消息: {{ childMessage }}</p>
        <p>子组件计数: {{ childCount }}</p>

        <app-child-03
        (messageEvent)="receiveMessage($event)"
        (countChanged)="handleCountChange($event)">
        </app-child-03>
    `
})
export class Parent03Component {
    childMessage = '';
    childCount = 0;

    receiveMessage(message: string) {
        this.childMessage = message;
    }

    handleCountChange(count: number) {
        this.childCount = count;
    }
}
