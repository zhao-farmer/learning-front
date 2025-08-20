import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CanComponentDeactivate } from './unsaved-changes.guard';

@Component({
  selector: 'app-edit-profile',
  template: `
    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">

      <!-- 表单字段 -->
     <div>
      <label>用户名: </label>
      <input type="text" formControlName="name">
    </div>

      <div>
        <label>邮箱: </label>
        <input type="email" formControlName="email">
      </div>
      <button type="submit">保存</button>
    </form>
    <hr>
    <button routerLink="/">跳转到主页</button>
  `
})
export class EditProfileComponent implements CanComponentDeactivate {
  profileForm: FormGroup;
  saved = false;

  constructor(private fb: FormBuilder) {
    // 验证
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  // 用于守卫的验证
  canDeactivate(): boolean {
    // 判断1：是否提交
    // 判断2：是否已输入
    return this.saved || !this.profileForm.dirty;
  }

  onSubmit(): void {
    console.log(this.profileForm);

    if (this.profileForm.valid) {
      // 保存逻辑后 可以进行跳转
      this.saved = true;
    }else{
      console.log("验证失败！");
    }
  }
}
