import { Component } from '@angular/core';

@Component({
  selector: 'handler-06',
  template: `
    <input
      (copy)="handleCopy($event)"
      (cut)="handleCut($event)"
      (paste)="handlePaste($event)"
      placeholder="尝试复制/剪切/粘贴"
    />
  `,
})
export class Handler06Component {
  handleCopy(event: ClipboardEvent) {
    console.log('内容被复制');
  }

  handleCut(event: ClipboardEvent) {
    console.log('内容被剪切');
  }

  handlePaste(event: ClipboardEvent) {
    const pastedText = event.clipboardData?.getData('text');
    console.log('粘贴的内容:', pastedText);
  }
}
