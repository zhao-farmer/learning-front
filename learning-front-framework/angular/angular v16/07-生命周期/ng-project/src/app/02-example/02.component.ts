import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'example-02',
  template: `<p>组件已初始化</p>`,
})
export class Example02Component implements OnInit {
  ngOnInit() {
    console.log('ngOnInit 触发');
    // 这里适合进行初始化操作
    this.fetchData();
    this.setupInitialState();
  }

  private fetchData() {
    console.log('获取初始数据...');
  }

  private setupInitialState() {
    console.log('设置初始状态...');
  }
}
