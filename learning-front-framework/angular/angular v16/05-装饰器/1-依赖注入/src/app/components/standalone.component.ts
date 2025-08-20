import { Component, Optional } from '@angular/core';
import { DataService } from '../services/data.service';
import { APP_CONFIG, AppConfig, DEFAULT_CONFIG } from '../services/config';
import { LoggerService } from '../services/logger.service';
import { ExtraService } from '../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-standalone',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>独立组件</h2>
    <p>{{ standaloneData }}</p>
    <p>有服务模块? {{ hasExtraService }}</p>
  `,
  providers: [
    // 工厂提供者
    {
      provide: DataService,
      useFactory: (logger: LoggerService, config: AppConfig) => {
        return new DataService(config, logger);
      },
      deps: [LoggerService, APP_CONFIG]
    },
    // 提供非类依赖
    { provide: APP_CONFIG, useValue: { ...DEFAULT_CONFIG, apiUrl: 'https://api.standalone.com' } },
    // 可选提供者
    ExtraService
  ]
})
export class StandaloneComponent {
  standaloneData: string;
  hasExtraService: boolean;

  constructor(
    private dataService: DataService,
    @Optional() private extraService?: ExtraService
  ) {
    this.standaloneData = dataService.fetchData();
    this.hasExtraService = !!extraService;
  }
}
