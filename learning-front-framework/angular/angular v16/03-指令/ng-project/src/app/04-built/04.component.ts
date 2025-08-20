import { Component } from '@angular/core';

@Component({
  selector: 'ngClass-01',
  template: `
    <!-- 根据条件添加类 -->
    <div [ngClass]="{ 'active': isActive, 'error': hasError }">
      对象语法示例
    </div>

    <!-- 使用组件属性 -->
    <button [ngClass]="buttonClasses">点击我</button>

    <!-- 动态计算 -->
    <div [ngClass]="{
      'text-success': score >= 80,
      'text-warning': score >= 60 && score < 80,
      'text-danger': score < 60
    }">
      分数: {{ score }}
    </div>
  `,
  styles:[`
    /* 状态样式 */
    .active { background-color: #e3f2fd; }
    .error { border-color: red; color: red; }

    /* 按钮样式 */
    .btn { padding: 8px 16px; border: none; cursor: pointer; }
    .btn-primary { background: blue; color: white; }
    .btn-disabled { opacity: 0.5; cursor: not-allowed; }

    /* 文本样式 */
    .text-success { color: green; }
    .text-warning { color: orange; }
    .text-danger { color: red; }
  `]
})
export class NgClass01Component {
  isActive = true;
  hasError = false;
  score = 75;

  buttonClasses = {
    'btn': true,
    'btn-primary': true,
    'btn-disabled': false
  };
}


@Component({
  selector: 'ngClass-02',
  template: `
    <!-- 静态类数组 -->
    <div [ngClass]="['base-class', 'additional-class']">
      静态类数组
    </div>

    <!-- 混合静态和动态类 -->
    <div [ngClass]="['card', isFeatured ? 'featured' : '']">
      卡片内容
    </div>

    <!-- 使用组件方法返回数组 -->
    <div [ngClass]="getClasses()">
      动态类数组
    </div>

    <!-- 条件类组合 -->
    <button [ngClass]="[
      'btn',
      type === 'primary' ? 'btn-primary' : 'btn-secondary',
      size === 'large' ? 'btn-lg' : ''
    ]">
      按钮
    </button>
  `,
  styles:[`
    /* 基础样式 */
    .base-class { padding: 10px; margin: 5px; }
    .additional-class { border: 1px solid #ccc; }

    /* 卡片样式 */
    .card { border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    .featured { border: 2px solid gold; }

    /* 用户卡片 */
    .user-card { padding: 15px; margin: 10px; }
    .highlighted {
      background-color: #fff3cd;
      border-color: #ffc107;
      box-shadow: 0 2px 8px rgba(255, 193, 7, 0.3);
    }

    .animated {
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }


    /* 按钮样式 */
    .btn { padding: 8px 16px; border: none; cursor: pointer; }
    .btn-primary { background: blue; color: white; }
    .btn-secondary { background: gray; color: white; }
    .btn-disabled { opacity: 0.5; cursor: not-allowed; }
    .btn-lg { font-size:"22px" }

  `]
})
export class NgClass02Component {
  isFeatured = true;
  type = 'primary';
  size = 'large';

  getClasses() {
    return [
      'user-card',
      this.isFeatured ? 'highlighted' : '',
      'animated'
    ];
  }
}


@Component({
  selector: 'ngClass-03',
  template: `
    <!-- 直接字符串 -->
    <div [ngClass]="'class1 class2 class3'">
      字符串语法
    </div>

    <!-- 动态字符串 -->
    <div [ngClass]="currentClassString">
      动态类字符串
    </div>

    <!-- 条件字符串 -->
    <div [ngClass]="isSpecial ? 'special highlighted' : 'normal'">
      条件类字符串
    </div>

    <!-- 使用模板字符串 -->
    <div [ngClass]="'base-' + variant + ' size-' + size">
      模板字符串类
    </div>
  `,
  styles:[`
    .class1 { color: red }
    .class2 { font-size: 22px }
    .class3 { font-weight: bold }
    .alert { padding: 10px;background-color:pink }
    .alert-info { color: orange; font-size: 12px }
    .special { font-style: italic }
    .highlighted {
      background-color: #fff3cd;
      border-color: #ffc107;
      box-shadow: 0 2px 8px rgba(255, 193, 7, 0.3);
    }
    .base-primary {
      background-color: #77ec5fff;
    }
    .size-large {
      font-size: 26px
    }
  `]
})
export class NgClass03Component {
  currentClassString = 'alert alert-info';
  isSpecial = true;
  variant = 'primary';
  size = 'large';
}
