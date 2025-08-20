import { Injectable } from '@angular/core';
import { delay, of,Observable } from 'rxjs';

interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {

  private mockUsers: User[] = [
    { id: 1, name: 'zhangsan', email: 'zhangsan@163.com' },
    { id: 2, name: 'lisi', email: 'lisi@163.com' },
    { id: 3, name: 'wangwu', email: 'wangwu@163.com' },
    { id: 4, name: 'zhaoliu', email: 'zhaoliu@163.com' }
  ];

  getUser(id: number): Observable<User> {
    // 如果没有查询到返回默认用户
    const user = this.mockUsers.find(u => u.id === id) || this.getDefaultUser();

    // 模拟网络延迟
    return of(user).pipe(delay(500));
  }

  private getDefaultUser(): User {
    return {
      id: 0,
      name: 'Unknown',
      email: '空',
    };
  }
}
