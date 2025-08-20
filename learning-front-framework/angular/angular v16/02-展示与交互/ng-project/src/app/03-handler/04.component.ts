import { Component } from '@angular/core';

@Component({
  selector: 'handler-04',
  template: `
    <input
      (input)="handleInput($event)"
      (change)="handleChange($event)"
      (blur)="handleBlur($event)"
      (focus)="handleFocus($event)"
      placeholder="表单输入"
    />
  `,
})
export class Handler04Component {
  handleInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    console.log('输入值变化:', value);
  }

  handleChange(event: Event) {
    console.log('值已改变:', (event.target as HTMLInputElement).value);
  }

  handleBlur(event: Event) {
    console.log('失去焦点');
  }

  handleFocus(event: Event) {
    console.log('获得焦点');
  }
}
