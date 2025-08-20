import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-child',
  template: `
    <h3>子组件</h3>
    <p>{{ childData }}</p>
    <p>与父实例相同? {{ isSameInstance }}</p>
  `
})
export class ChildComponent {
  childData: string;
  isSameInstance: boolean;

  constructor(
    private dataService: DataService,
    private parentDataService: DataService,
    private logger: LoggerService
  ) {
    this.childData = dataService.fetchData();
    this.isSameInstance = dataService === parentDataService;
    logger.log('Child component initialized');
  }
}
