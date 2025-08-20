import { Component, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'example-07',
  template: `<p>视图已检查</p>`,
})
export class Example07Component implements AfterViewChecked {
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked 触发');
  }
}
