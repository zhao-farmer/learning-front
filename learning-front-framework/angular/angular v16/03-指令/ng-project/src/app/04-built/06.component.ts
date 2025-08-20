import { Component } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'formControl-01',
  template: `
    <input type="text" [formControl]="usernameControl">
    <p>值: {{ usernameControl.value }}</p>
    <p>状态: {{ usernameControl.status }}</p>
  `,
})
export class FormControl01Component {
  usernameControl = new FormControl('初始值', {
    validators: [Validators.required, Validators.minLength(3)]
  });
}

