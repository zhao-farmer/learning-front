import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-example-dialog',
  template: `
    <h1 mat-dialog-title>你好 {{ data.name }}</h1>
    <div mat-dialog-content>
      <p>你最喜欢的动物是什么？</p>
      <mat-form-field appearance="fill">
        <mat-label>最喜欢的动物</mat-label>
        <input matInput [(ngModel)]="data.name" />
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">不，谢谢</button>
      <button mat-button [mat-dialog-close]="data.name" cdkFocusInitial>
        好的
      </button>
    </div>
  `,
})
export class ExampleDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData // 接收传入的数据
  ) {}

  onNoClick(): void {
    this.dialogRef.close(); // 关闭对话框，不返回数据
  }
}
