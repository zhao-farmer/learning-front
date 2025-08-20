import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-items',
  template: `
    <ul>
      <li *ngFor="let item of items$ | async">
        姓名：{{ item.userName }}
        年龄：{{ item.age }}
        性别：{{ item.sex }}
      </li>
    </ul>

    <hr>
    <h1>新增用户</h1>
    <div>
      姓名：<input type="text" [(ngModel)]="userForm.userName" name="username"/><br>
      年龄：<input type="number" [(ngModel)]="userForm.age" name="age"/><br>
      性别：<select name="sex" id="sex" [(ngModel)]="userForm.sex" >
              <option value="男">男</option>
              <option value="女">女</option>
            </select>
    </div>
    <button (click) = "createUser()">点击新增</button>
  `
})
export class HttpComponent implements OnInit {

  // 列表数据
  items$: Observable<any[]> = new Observable<any[]>;

  // 新建用户
  userForm:{userName:string,age:number,sex:string} = {userName:"",age:18,sex:"男"}

  // apiservice 注入
  constructor(private apiService: ApiService) {}

  // 初始化 获取数据
  ngOnInit() {
    this.items$ =  this.apiService.getAllUsers();
  }

  // 按钮点击后 创建用户
  createUser() {
    this.apiService.createUser(this.userForm).subscribe({
      next: (response) => {
        console.log('创建成功', response);
        // 刷新列表
        this.items$ = this.apiService.getAllUsers();
      },
      error: (err) => console.error('创建失败', err)
    });
  }
}
