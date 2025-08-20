import { Component } from '@angular/core';

@Component({
  selector: 'handler-03',
  template: `
    <input
      (keydown)="handleKeyDown($event)"
      (keyup)="handleKeyUp($event)"
      (keypress)="handleKeyPress($event)"
      placeholder="输入内容"
    />
  `,
})
export class Handler03Component {
  handleKeyDown(event: KeyboardEvent) {
    console.log('键按下:', event.key, '键码:', event.keyCode);

    // 阻止默认行为示例
    if (event.key === 'Enter') {
      event.preventDefault();
      console.log('阻止了回车键默认行为');
    }
  }

  handleKeyUp(event: KeyboardEvent) {
    console.log('键释放:', event.key);
  }

  handleKeyPress(event: KeyboardEvent) {
    console.log('按键:', event.key);
  }
}
