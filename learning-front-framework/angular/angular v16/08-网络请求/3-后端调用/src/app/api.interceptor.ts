import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap  } from 'rxjs/operators';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // 请求处理逻辑
    const modifiedRequest = this.handleRequest(request);

    // 执行请求
    return next.handle(modifiedRequest).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          this.handleResponse(event);
        }
      }),
      catchError(error => this.handleError(error))
    );
  }

  // 请求拦截器
  private handleRequest(request: HttpRequest<any>): HttpRequest<any> {
    console.log("请求拦截开始",request.url);


    // 从本地存储获取token
    const authToken = localStorage.getItem('auth_token');

    // 克隆请求并添加头部
    return request.clone({
      setHeaders: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
  }

  // 响应拦截器
  private handleResponse(response: HttpResponse<any>) {
    console.log("响应拦截开始");

    // 统一处理JSON响应格式
    if (response.body && response.body.code !== undefined) {
      // 如果后端有统一的响应格式，可以在这里处理
      const { code, data, message } = response.body;

      if (code !== 200) {
        throw new Error(message || '请求处理失败');
      }

      // 替换响应体为实际数据
      return response.clone({ body: data });
    }

    // 没有特殊格式，直接返回原始响应
    return response;
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = '发生未知错误';

    if (error.error instanceof ErrorEvent) {
      // 客户端错误
      errorMessage = `客户端错误: ${error.error.message}`;
    } else {
      // 服务器端错误
      switch (error.status) {
        case 400:
          errorMessage = error.error?.message || '请求参数错误';
          break;
        case 401:
          errorMessage = '未授权，请重新登录';
          // 可以在这里跳转到登录页
          break;
        case 403:
          errorMessage = '拒绝访问';
          break;
        case 404:
          errorMessage = '请求资源不存在';
          break;
        case 500:
          errorMessage = '服务器内部错误';
          break;
        default:
          errorMessage = error.error?.message || `服务器错误: ${error.status}`;
      }
    }

    console.error(errorMessage);
    // 可以在这里显示全局错误提示
    return throwError(() => new Error(errorMessage));
  }
}
