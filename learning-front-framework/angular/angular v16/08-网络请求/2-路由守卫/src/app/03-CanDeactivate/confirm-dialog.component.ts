import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  template: `
    <h2 mat-dialog-title>{{ data.title }}</h2>

    <mat-dialog-content>
      <p>{{ data.message }}</p>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-button (click)="onCancel()">{{ data.cancelText }}</button>
      <button mat-raised-button color="primary" (click)="onConfirm()">
        {{ data.confirmText }}
      </button>
    </mat-dialog-actions>
  `,
  styles:[`
    /* 可以添加自定义样式 */
    .mat-dialog-content {
      padding: 20px 24px;
      margin: 0;
      font-size: 16px;
      line-height: 1.5;
    }

    .mat-dialog-actions {
      padding: 8px 24px;
      margin-bottom: 0;
      justify-content: flex-end;
    }

    button {
      margin-left: 8px;
    }
  `]
})
export class ConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      title?: string;
      message: string;
      confirmText?: string;
      cancelText?: string;
    }
  ) {
    console.log("步骤三：调用弹框模板！");
    // 设置默认值
    this.data.title = this.data.title || '确认';
    this.data.confirmText = this.data.confirmText || '确认';
    this.data.cancelText = this.data.cancelText || '取消';
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
