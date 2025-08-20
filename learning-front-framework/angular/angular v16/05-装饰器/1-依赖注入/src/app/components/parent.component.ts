import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-parent',
  template: `
    <h2>父组件</h2>
    <p>{{ parentData }}</p>
    <app-child></app-child>
  `,
  providers: [
    // 组件级提供者 - 为这个组件及其子组件创建新的DataService实例
    DataService,
    LoggerService
  ]
})
export class ParentComponent {
  parentData: string;

  constructor(private dataService: DataService) {
    this.parentData = dataService.fetchData();
  }
}
