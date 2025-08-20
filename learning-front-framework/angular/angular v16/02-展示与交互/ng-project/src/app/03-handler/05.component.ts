import { Component } from '@angular/core';

@Component({
  selector: 'handler-05',
  template: `
    <div
      draggable="true"
      (dragstart)="handleDragStart($event)"
      (dragend)="handleDragEnd($event)"
      (drag)="handleDrag($event)"
    >
      可拖拽元素
    </div>

    <div
      (dragover)="handleDragOver($event)"
      (dragenter)="handleDragEnter($event)"
      (dragleave)="handleDragLeave($event)"
      (drop)="handleDrop($event)"
      class="drop-zone"
    >
      放置区域
    </div>
  `,
})
export class Handler05Component {
  handleDragStart(event: DragEvent) {
    console.log('开始拖拽');
    event.dataTransfer?.setData('text/plain', '拖拽数据');
  }

  handleDrop(event: DragEvent) {
    event.preventDefault();
    const data = event.dataTransfer?.getData('text/plain');
    console.log('放置数据:', data);
  }
  handleDragEnd(event: DragEvent) {
    console.log('拖拽结束');
  }
  handleDrag(event: DragEvent) {
    console.log('拖拽中');
  }
  handleDragOver(event: DragEvent) {
    console.log('拖拽相交');
  }
  handleDragEnter(event: DragEvent) {
    console.log('拖拽进入');
  }

  handleDragLeave(event: DragEvent) {
    console.log('拖拽离开');
  }
}
