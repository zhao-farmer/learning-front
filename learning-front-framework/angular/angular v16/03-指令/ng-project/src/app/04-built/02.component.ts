import { Component } from '@angular/core';

@Component({
  selector: 'ngstyle-01',
  template: `
    <div [ngStyle]="{'color': textColor, 'font-size.px': fontSize}">
      这段文字的颜色会变化
    </div>
    <button (click) = "increaseFont()">字体增大</button>
  `,
})
export class NgSytel01Component {
  textColor = 'red';
  fontSize = 16;

  increaseFont() {
      this.fontSize += 2;
  }
}


@Component({
  selector: 'ngstyle-02',
  template: `
   <div [ngStyle]="{
      'font-weight': isImportant ? 'bold' : 'normal',
      'text-decoration': hasError ? 'underline' : 'none'
    }">
      根据条件变化的样式
    </div>
  `,
})
export class NgSytel02Component {
  isImportant = true;
  hasError = true;
}

@Component({
  selector: 'ngstyle-03',
  template: `
    <div [ngStyle]="getDynamicStyles()">样式由方法控制</div>
  `,
})
export class NgSytel03Component {
  isActive = true;
  isDisabled = false;

  getDynamicStyles() {
    return {
      'border': this.isActive ? '2px solid green' : '1px solid gray',
      'padding': this.isActive ? '15px' : '10px',
      'opacity': this.isDisabled ? '0.5' : '1'
    };
  }
}
