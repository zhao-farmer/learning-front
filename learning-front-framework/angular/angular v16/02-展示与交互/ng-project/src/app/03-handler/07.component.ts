import { Component } from '@angular/core';

@Component({
  selector: 'handler-07',
  template: `
    <!-- 特定按键事件 -->
    <input (keydown.enter)="onEnterPressed()" />
    <input (keydown.arrowup)="onArrowUp()" />
    <input (keydown.escape)="onEscape()" />

    <!-- 组合键事件 -->
    <button (click.shift)="onShiftClick()">Shift+点击</button>
    <button (click.ctrl)="onCtrlClick()">Ctrl+点击</button>
    <button (click.meta)="onMetaClick()">Meta(Command)+点击</button>

    <!-- 阻止默认行为和事件冒泡 -->
    <a href="#" (click)="$event.preventDefault(); logClick()"
      >阻止默认链接行为</a
    >
    <div (click)="onOuterClick()">
      外层
      <div (click)="$event.stopPropagation(); onInnerClick()">
        内层(阻止冒泡)
      </div>
    </div>
  `,
})
export class Handler07Component {
  onEnterPressed() {}
  onArrowUp() {}
  onEscape() {}
  onShiftClick() {}
  onCtrlClick() {}
  onMetaClick() {}
  logClick() {}
  onOuterClick() {}
  onInnerClick() {}
}
