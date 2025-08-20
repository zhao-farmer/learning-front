import { Component, Inject } from '@angular/core';
import { APP_CONFIG, AppConfig } from './services/config';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular DI Demo</h1>
    <app-parent></app-parent>
    <app-standalone></app-standalone>
    <hr>
    <p>根URL地址: {{ apiUrl }}</p>
    <p>API Key: {{ apiKey }}</p>
  `
})
export class AppComponent {
  apiUrl: string;
  apiKey: string;

  constructor(
    @Inject(APP_CONFIG) private config: AppConfig,
    @Inject('API_KEY') private injectedApiKey: string,
    private logger: LoggerService
  ) {
    this.apiUrl = config.apiUrl;
    this.apiKey = injectedApiKey;
    this.logger.log('根组件已初始化');
  }
}
