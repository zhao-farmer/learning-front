import { Component } from '@angular/core';

@Component({
  selector: 'handler-02',
  template: `
    <div (click)="handleClick($event)">单击事件</div>
    <div (dblclick)="handleDoubleClick($event)">双击事件</div>
    <div (mouseenter)="handleMouseEnter($event)">鼠标进入</div>
    <div (mouseleave)="handleMouseLeave($event)">鼠标离开</div>
    <div (mousemove)="handleMouseMove($event)">鼠标移动</div>
    <div (mousedown)="handleMouseDown($event)">鼠标按下</div>
    <div (mouseup)="handleMouseUp($event)">鼠标释放</div>
    <div (contextmenu)="handleContextMenu($event)">右键菜单</div>

    <hr>
    <div> 当前事件 {{handlerName}} </div>
  `,
})
export class Handler02Component {
  handlerName = "无"

  handleClick(event: MouseEvent) {
    this.handlerName = "单击事件";
    console.log('单击事件', event);
  }
  handleDoubleClick(event: MouseEvent) {
    this.handlerName = "双击事件";
    console.log('双击事件', event);
  }
  handleMouseEnter(event: MouseEvent) {
    this.handlerName = "鼠标进入元素";
    console.log('鼠标进入元素', event.target);
  }
  handleMouseLeave(event: MouseEvent) {
    this.handlerName = "鼠标离开元素";
    console.log('鼠标离开元素', event.target);
  }
  handleMouseMove(event: MouseEvent) {
    this.handlerName = "鼠标移动";
    console.log('鼠标移动', event.target);
  }
  handleMouseDown(event: MouseEvent) {
    this.handlerName = "鼠标按下";
    console.log('鼠标按下', event.target);
  }
  handleMouseUp(event: MouseEvent) {
    this.handlerName = "鼠标释放";
    console.log('鼠标释放', event.target);
  }
  handleContextMenu(event: MouseEvent) {
    this.handlerName = "右键菜单";
    console.log('右键菜单', event.target);
  }
}
