import { throwError } from 'rxjs';

throwError('发生错误').subscribe({
  error: err => console.error(err),
});