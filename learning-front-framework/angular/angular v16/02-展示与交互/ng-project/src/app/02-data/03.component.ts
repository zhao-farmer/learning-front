import { Component } from '@angular/core';

@Component({
  selector: 'data-03',
  template: `
    <!-- 绑定到标准HTML属性 -->
    <img [src]="imageUrl" [alt]="imageAlt" [width]="imageWidth">

    <!-- 绑定到自定义属性 -->
    <div [attr.data-id]="userId">用户信息</div>

    <!-- 绑定到class属性 -->
    <button [class.active]="isActive">按钮</button>

    <!-- 绑定到style属性 -->
    <p [style.color]="textColor">样式绑定示例</p>

    <!-- 绑定到多个样式 -->
    <div [style]="dynamicStyles">动态样式</div>
  `,
  styles: [`
    .active {
      background-color: #4CAF50;
      color: white;
    }
  `]
})
export class Data03Component {
  imageUrl = 'assets/logo.jpg';
  imageAlt = '应用Logo';
  imageWidth = 100;
  userId = 'user123';
  isActive = true;
  textColor = 'blue';
  dynamicStyles = {
    'font-size': '1.2em',
    'padding': '10px',
    'border': '1px solid #ccc'
  };
}
