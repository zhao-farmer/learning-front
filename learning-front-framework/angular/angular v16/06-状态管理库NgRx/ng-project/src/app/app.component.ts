import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
     <h1>Angular 16 + NgRx 示例</h1>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'ng-project';
}
