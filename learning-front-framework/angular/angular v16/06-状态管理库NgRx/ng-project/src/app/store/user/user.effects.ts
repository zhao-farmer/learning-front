import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, delay } from 'rxjs/operators';
import { loadUsers, loadUsersSuccess, loadUsersFailure } from './user.actions';
import { User } from '../../models/user.model';

export class UserEffects {

  // action依赖注入
  private actions$ = inject(Actions);

  // 模拟用户数据
  private mockUsers: User[] = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' }
  ];

  // 作为标志
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),  // 触发类型
      delay(1000), // 模拟网络延迟
      mergeMap(() =>
        of(this.mockUsers).pipe(
          map(users => loadUsersSuccess({ users })),
          catchError(error => of(loadUsersFailure({ error: error.message })))
        )
      )
    )
  , { functional: true });
}
