import { CanDeactivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { ConfirmDialogService } from './confirm-dialog.service';
import {Observable} from 'rxjs'

export interface CanComponentDeactivate {
  canDeactivate: () => boolean | Promise<boolean> | Observable<boolean>;
}

export const unsavedChangesGuard: CanDeactivateFn<CanComponentDeactivate> =
  (component: CanComponentDeactivate) => {
    const confirmService = inject(ConfirmDialogService);

    console.log("步骤一：判断是是否提交!");

    return component.canDeactivate() ?
      component.canDeactivate() :
      confirmService.confirm('您有未保存的更改，要离开吗？');
  };
