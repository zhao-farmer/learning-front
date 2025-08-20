import { Component } from '@angular/core';

@Component({
  selector: 'attr-03',
  template: `
    <p [appResponsiveSize]="{ sm: '14px', md: '18px', lg: '22px' }">
      我的字号会根据屏幕大小变化
    </p>
  `,
})
export class Attr03Component {}
