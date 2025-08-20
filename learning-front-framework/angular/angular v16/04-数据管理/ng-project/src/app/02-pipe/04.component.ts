import { Pipe, PipeTransform,Component } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number = 10, ellipsis: string = '...'): string {
    if (!value) return '';
    return value.length > limit
      ? value.substring(0, limit) + ellipsis
      : value;
  }
}

// 父组件
@Component({
  selector: 'app-parent-04',
  template: `
    <p>{{ longText | truncate:20:'...更多' }}</p>
  `
})
export class Pipe04Component {
  longText = 'Angular是一个由Google维护的开源前端框架，用于构建单页面应用程序。';
}
