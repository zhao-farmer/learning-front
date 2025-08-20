import { Component } from '@angular/core';

@Component({
  selector: 'pipe-01',
  template: `
    <h2>管道示例</h2>
    <p>原始日期: {{ currentDate }}</p>
    <p>格式化日期: {{ currentDate | date : 'yyyy年MM月dd日 HH:mm:ss' }}</p>

    <p>原始价格: {{ product.price }}</p>
    <p>
      货币格式化: {{ product.price | currency : 'CNY' : 'symbol' : '1.2-2' }}
    </p>

    <p>原始文本: {{ longText }}</p>
    <p>截断文本: {{ longText | slice : 0 : 20 }}...</p>

    <p>JSON格式: {{ user | json }}</p>
  `,
})
export class Pipe01Component {
  currentDate = new Date();
  product = {
    name: '智能手机',
    price: 2999.99,
  };
  longText = 'Angular是一个由Google维护的开源前端框架，用于构建单页面应用程序。';
  user = {
    name: '李四',
    age: 30,
    address: {
      city: '北京',
      street: '朝阳区',
    },
  };
}
