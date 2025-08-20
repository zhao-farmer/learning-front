import { Component } from '@angular/core';

@Component({
  selector: 'style-01',
  template: `
    <div [style.color]="textColor">这段文字的颜色会变化</div>
    <div [style.font-size.px]="fontSize">字体大小可调节</div>
    <button (click) = "increaseFont()">字体增大</button>
  `,
})
export class Sytel01Component {
  textColor = 'red';
  fontSize = 16;

  increaseFont() {
      this.fontSize += 2;
  }
}


@Component({
  selector: 'style-02',
  template: `
    <!-- 绑定多个样式属性 -->
    <div [style]="currentStyles">这个div的样式会动态变化</div>
    <button (click) = "updateStyles()">更新样式</button>
  `,
})
export class Sytel02Component {

  currentStyles = {
    'font-style': 'italic',
    'font-weight': 'bold',
    'background-color': '#f0f0f0'
  };

  updateStyles() {
    this.currentStyles = {
      ...this.currentStyles,
      'background-color':'#ff00ff'
    };
  }
}


@Component({
  selector: 'style-03',
  template: `
    <!-- 绑定多个样式属性 -->
     <div [style.height.px]="width" [style.width.%]="height">1</div>
     <div [style.margin.rem]="margin">2</div>
  `,
  styles:[`
    div{
      background-color: pink;
    }
  `]
})
export class Sytel03Component {
  width = 200;
  height = 10;
  margin = 5;
}
