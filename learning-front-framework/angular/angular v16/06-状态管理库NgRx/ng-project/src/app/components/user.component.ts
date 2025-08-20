import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadUsers,addUser, removeUser} from '../store/user/user.actions';
import {
  selectUsers,
  selectUsersLoading,
  selectUsersError,
  selectUserCount
} from '../store/user/user.selectors';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user',
  template: `
    <div class="user">
      <h2>用户管理示例</h2>

      <div *ngIf="loading$ | async" class="loading">加载用户中...</div>
      <div *ngIf="error$ | async as error" class="error">错误: {{ error }}</div>

      <p>用户数量: {{ userCount$ | async }}</p>

      <button (click)="onLoadUsers()" [disabled]="loading$ | async">
        加载用户
      </button>

      <button (click)="onAddUser()" [disabled]="loading$ | async">
        添加测试用户
      </button>

      <div class="user-list">
        <h3>用户列表:</h3>
        <div *ngFor="let user of users$ | async" class="user-item">
          {{ user.name }} ({{ user.email }})
          <button (click)="onRemoveUser(user.id)">删除</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .user { padding: 20px; border: 1px solid #ccc; margin: 10px; }
    .loading { color: blue; }
    .error { color: red; }
    .user-item { margin: 5px; padding: 10px; border: 1px solid #eee; }
    button { margin-left: 10px; }
  `]
})
export class UserComponent {

  // 依赖注入
  private store = inject(Store);
  private nextId = 4;

  // 接收到的数据
  users$: Observable<User[]> = this.store.select(selectUsers);
  loading$: Observable<boolean> = this.store.select(selectUsersLoading);
  error$: Observable<string | null> = this.store.select(selectUsersError);
  userCount$: Observable<number> = this.store.select(selectUserCount);

  onLoadUsers() {
    // 调用 action 初始化数据
    this.store.dispatch(loadUsers());
  }

  onAddUser() {
    const newUser: User = {
      id: this.nextId++,
      name: `用户${this.nextId}`,
      email: `user${this.nextId}@example.com`
    };
    this.store.dispatch(addUser({ user: newUser }));
  }

  onRemoveUser(id: number) {
    this.store.dispatch(removeUser({ id }));
  }
}
