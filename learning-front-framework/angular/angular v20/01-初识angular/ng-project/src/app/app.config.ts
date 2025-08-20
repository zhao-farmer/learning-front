import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(), // 全局错误监听
    provideZonelessChangeDetection(), // 启用 Zoneless 模式
    provideRouter(routes)
  ]
};
