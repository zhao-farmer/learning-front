import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'example-01-child',
  template: `<p>用户名: {{ name }}，年龄: {{ age }}</p>`,
})
export class Example01ChildComponent implements OnChanges {
  @Input() name!: string;
  @Input() age!: number;

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges 触发');

    for (const propName in changes) {
      const change = changes[propName];
      console.log(
        `${propName} 变化:`,
        `当前值: ${change.currentValue},`,
        `之前值: ${change.previousValue}`,
        `是否是首次变化: ${change.firstChange}`
      );
    }
  }
}

// 使用示例
@Component({
  selector: 'example-01',
  template: `
    <example-01-child [name]="parentName" [age]="parentAge" />
  `,
})
export class Example01Component {
  parentName = '张三';
  parentAge = 18;
}
