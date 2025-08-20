import { Component } from '@angular/core';

@Component({
  selector: 'hidden-01',
  template: `
    <h3>内容显示控制</h3>

    <button (click)="isVisible = !isVisible">
      {{ isVisible ? '隐藏' : '显示' }}内容
    </button>

    <button (click)="showSecret = !showSecret">
      {{ showSecret ? '隐藏' : '显示' }}秘密
    </button>

    <div [hidden]="!isVisible">这是可见的内容</div>
    <div [hidden]="!showSecret">🔒 秘密信息</div>
    <div [hidden]="!isVisible || !showSecret">只有两个都显示时我才出现</div>

    <h4>权限控制</h4>
    <div [hidden]="!user.isAdmin">管理员功能</div>
    <div [hidden]="user.level < 3">VIP功能</div>
  `
})
export class Hidden01Component {
  isVisible = true;
  showSecret = false;

  user = {
    isAdmin: true,
    level: 5
  };
}


@Component({
  selector: 'title-01',
  template: `
    <h3>悬停提示示例</h3>

    <button [title]="buttonTooltip">悬停查看按钮提示</button>

    <input
      type="text"
      [title]="inputTitle"
      placeholder="输入内容"
      (input)="onInputChange($event)">

    <div [title]="isValid ? '数据有效' : '请检查输入'">
      数据验证状态: {{ isValid ? '有效' : '无效' }}
    </div>

    <span [title]="getUserTooltip()">用户信息</span>

    <img
      src="assets/1.jpeg"
      [title]="'图片ID: ' + imageId"
      alt="示例图片">

    <a href="#" [title]="linkDescription">重要链接</a>
  `
})
export class Title01Component {
  buttonTooltip = '点击此按钮执行操作';
  inputTitle = '请输入您的姓名';
  isValid = true;
  imageId = '12345';
  linkDescription = '这是一个导航链接';

  getUserTooltip() {
    return `用户信息：张三，25岁，管理员`;
  }

  onInputChange(event: any) {
    this.isValid = event.target.value.length > 3;
  }
}


@Component({
  selector: 'tabindex-01',
  template: `
    <h3>Tab键导航顺序</h3>
    <p>使用 Tab 键在不同元素间导航</p>

    <input type="text" placeholder="第一个输入框" tabindex="1">
    <input type="text" placeholder="第二个输入框" tabindex="2">

    <button (click)="toggleDisabled()" [tabindex]="isDisabled ? -1 : 0">
      {{ isDisabled ? '禁用按钮' : '可点击按钮' }}
    </button>

    <div [tabindex]="0" (keydown.enter)="onDivClick()">
      这个div也可以获得焦点（按Enter触发）
    </div>

    <h4>动态Tab索引</h4>
    <button *ngFor="let btn of buttons; let i = index"
            [tabindex]="i + 10">
      按钮 {{ i + 1 }}
    </button>

    <h4>条件Tab索引</h4>
    <input type="text" placeholder="条件输入框"
           [tabindex]="allowEditing ? 5 : -1">
    <label>
      <input type="checkbox" [(ngModel)]="allowEditing">
      允许编辑
    </label>
  `
})
export class Tabindex01Component {
  isDisabled = false;
  allowEditing = true;
  buttons = [1, 2, 3, 4];

  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }

  onDivClick() {
    alert('Div被激活！');
  }
}
