import { throwError } from 'rxjs';

throwError(() => new Error('致命错误')).subscribe({
    next: () => console.log('不会执行'),
    error: err => console.error('全局捕获:', err.message),
    complete: () => console.log('不会执行')
});
