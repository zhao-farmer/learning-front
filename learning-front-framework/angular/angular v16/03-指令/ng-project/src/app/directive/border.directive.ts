import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDynamicBorder]'
})
export class DynamicBorderDirective {
  @Input() borderColorOther: string = '1px solid';
  @Input() borderColor: string = '#ccc';

  // get borderStyle() 等于是一个组合的参数
  @HostBinding('style.border') get borderStyle() {
    return `${this.borderColor} ${this.borderColorOther}`;
  }

  @HostBinding('style.padding') padding = '10px';
}
