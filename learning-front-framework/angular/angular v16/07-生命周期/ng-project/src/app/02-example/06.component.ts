import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

// 子组件
@Component({
  selector: 'example-05-child',
  template: `<p>子组件</p>`,
})
export class Example06ChildComponent {}

// 父组件
@Component({
  selector: 'example-06',
  template: `
    <p #viewParagraph>视图元素</p>
    <example-05-child></example-05-child>
  `,
})
export class Example06Component implements AfterViewInit {
  @ViewChild('viewParagraph') viewParagraph!: ElementRef;
  @ViewChild(Example06ChildComponent) childComponent!: Example06ChildComponent;

  ngAfterViewInit() {
    console.log('ngAfterViewInit 触发');
    console.log('视图元素:', this.viewParagraph.nativeElement.textContent);
    console.log('子组件:', this.childComponent);
  }
}
