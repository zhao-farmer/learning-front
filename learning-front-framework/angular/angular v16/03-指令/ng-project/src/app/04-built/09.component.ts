import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'FormArray-01',
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
export class FormArray01Component {
  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      hobbies: new FormArray([
        new FormControl('游泳'),
        new FormControl('阅读')
      ])
    });
  }

  // 获取 hobbies FormArray
  get hobbies() {
    return this.userForm.get('hobbies') as FormArray;
  }

  // 添加新爱好
  addHobby() {
    this.hobbies.push(new FormControl(''));
  }

  // 删除爱好
  removeHobby(index: number) {
    this.hobbies.removeAt(index);
  }
}
