import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // 全局单例服务
})
export class ApiService {

  private apiUrl = '/api';

  constructor(private http: HttpClient) {}

  /* =================== get 请求  =================== */

  // 获取所有数据
  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users`);
  }

  // 带参数的 GET 请求
  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users/${id}`);
  }

  // 带查询参数的 GET 请求
  searchUsers(keyword: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users`, {
      params: { name: keyword },
    });
  }

  /* =================== post 请求  =================== */

  createUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/users`, user);
  }

  // 带 headers 的 POST
  createUserWithAuth(user: any): Observable<any> {
    const headers = { Authorization: 'Bearer your-token' };
    return this.http.post<any>(`${this.apiUrl}/users`, user, { headers });
  }

  /* =================== put 请求  =================== */

  // 完整更新 (PUT)
  updateUser(id: number, user: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/users/${id}`, user);
  }

  /* =================== PATCH 请求  =================== */

  // 部分更新 (PATCH)
  partialUpdateUser(id: number, updates: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/users/${id}`, updates);
  }

  /* =================== delete 请求  =================== */
  // 删除
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/users/${id}`);
  }
}
