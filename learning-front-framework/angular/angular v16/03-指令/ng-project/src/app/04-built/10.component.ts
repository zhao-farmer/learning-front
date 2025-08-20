// 首先导入必要的模块
import { Component } from '@angular/core';
import { FormBuilder,FormArray, Validators,FormGroup } from '@angular/forms';


@Component({
  selector: 'formBuilder-control',
  template: `
    <div>
      <label>用户名:</label>
      <input [formControl]="usernameControl">
      <p>值: {{ usernameControl.value }}</p>
      <p>状态: {{ usernameControl.status }}</p>
    </div>
  `
})
export class FormBuilder01Component {
  // 使用 FormBuilder 创建 FormControl
  usernameControl = this.fb.control('默认值', [
    Validators.required,
    Validators.minLength(3)
  ]);

  constructor(private fb: FormBuilder) {}
}


@Component({
  selector: 'formBuilder-group',
  template: `
    <form [formGroup]="userForm">
      <input formControlName="firstName" placeholder="名字">
      <input formControlName="lastName" placeholder="姓氏">
      <p>表单值: {{ userForm.value | json }}</p>
      <p>状态: {{ userForm.status }}</p>
    </form>
  `
})
export class FormBuilder02Component {
  // 使用 FormBuilder 创建 FormGroup
  userForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {}
}



@Component({
  selector: 'formBuilder-array',
  template: `
    <h3>兴趣爱好列表</h3>
    <form [formGroup]="userForm">
      <div formArrayName="hobbies">
        <div *ngFor="let hobby of hobbies.controls; let i = index" class="hobby-item">
          <input [formControlName]="i" placeholder="输入爱好">
          <button type="button" (click)="removeHobby(i)">删除</button>
        </div>
      </div>

      <button type="button" (click)="addHobby()">添加爱好</button>

      <div>
        <h4>当前爱好:</h4>
        <pre>{{ hobbies.value | json }}</pre>
        <p>共有 {{ hobbies.length }} 个爱好</p>
      </div>
    </form>
  `,
  styles: [`
    .hobby-item {
      margin: 10px 0;
      display: flex;
      gap: 10px;
    }
    button {
      padding: 5px 10px;
    }
  `]
})
export class FormBuilder03Component {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      hobbies: this.fb.array([
        '游泳',
        '阅读'
      ])
    });
  }

  // 获取 hobbies FormArray
  get hobbies() {
    return this.userForm.get('hobbies') as FormArray;
  }

  // 添加新爱好
  addHobby() {
    this.hobbies.push(this.fb.control(''));
  }

  // 删除爱好
  removeHobby(index: number) {
    this.hobbies.removeAt(index);
  }
}
