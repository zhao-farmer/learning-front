import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'formGroupName-01',
  template: `
  <form [formGroup]="userForm">
    <input type="text" formControlName="name" placeholder="姓名">

    <div formGroupName="contact">
      <input type="email" formControlName="email" placeholder="邮箱">
      <input type="tel" formControlName="phone" placeholder="电话">
    </div>
  </form>

    <p>表单值: {{ userForm.value | json }}</p>
    <p>表单状态: {{ userForm.status }}</p>
  `,
})
export class FormGroupName01Component {
  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    contact: new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
      phone: new FormControl('', [Validators.required,Validators.minLength(11)])
    })
  });
}

