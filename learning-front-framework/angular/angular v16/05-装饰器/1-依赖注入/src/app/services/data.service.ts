import { Injectable, Inject, Optional } from '@angular/core';
import { APP_CONFIG, AppConfig } from './config';
import { LoggerService } from './logger.service';

@Injectable()
export class DataService {
  private retryCount = 0;

  constructor(
    @Inject(APP_CONFIG) private config: AppConfig,
    private logger: LoggerService,
    @Optional() private extraService?: ExtraService
  ) {
    this.logger.log(`使用API初始化的DataService: ${config.apiUrl}`);
  }

  fetchData(): string {
    if (this.extraService) {
      this.logger.log('使用附加的服务');
    }
    return `已获取数据 (重试计数: ${this.retryCount++})`;
  }
}

// 可选依赖的服务
@Injectable()
export class ExtraService {
  doSomething(): string {
    return 'Extra service action';
  }
}
