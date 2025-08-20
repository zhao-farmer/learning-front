import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ExampleDialogComponent } from './example-dialog/example-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-demo';
  name: string = '';
  isChecked: boolean = false;

  // 注入 MatSnackBar 和 MatDialog 服务
  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog) {}

  openSnackbar() {
    // 打开一个简单的 Snackbar
    this._snackBar.open('你好 Angular Material!', '提示信息', {
      duration: 3000 // 3秒后自动消失
    });
  }

  openDialog(): void {
    // 打开对话框，并传递数据
    const dialogRef = this.dialog.open(ExampleDialogComponent, {
      width: '250px',
      data: { name: this.name } // 将输入框的 name 传递给对话框
    });

    // 订阅对话框关闭后返回的数据
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.name = result;
      }
    });
  }
}
