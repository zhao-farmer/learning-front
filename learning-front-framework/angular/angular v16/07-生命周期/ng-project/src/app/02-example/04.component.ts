import { Component, AfterContentInit, ContentChild } from '@angular/core';

@Component({
  selector: 'example-04-child',
  template: `
    <ng-content></ng-content>
    <p>内容投影已完成</p>
  `,
})
export class Example04ChildComponent implements AfterContentInit {
  @ContentChild('projectedContent') projectedContent: any;

  ngAfterContentInit() {
    console.log('ngAfterContentInit 触发');
    console.log('投影内容:', this.projectedContent);
  }
}

// 使用示例
@Component({
  selector: 'example-04',
  template: `
    <example-04-child>
      <div #projectedContent>这是投影内容</div>
    </example-04-child>
  `,
})
export class Example04Component {}
