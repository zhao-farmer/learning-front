import { Component, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'example-05',
  template: `
    <ng-content></ng-content>
    <p>内容已检查</p>
  `
})
export class Example05Component implements AfterContentChecked {
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked 触发');
  }
}
