import { of } from 'rxjs';

of(1, 2, 3).subscribe({
    next: value => console.log(value),
    complete: () => console.log('完成'),
});


// 输出：
// 1
// 2
// 3
// 完成