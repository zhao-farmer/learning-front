import { InjectionToken } from '@angular/core';

// 定义非类依赖的InjectionToken
export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export interface AppConfig {
  apiUrl: string;
  production: boolean;
  maxRetries: number;
}

export const DEFAULT_CONFIG: AppConfig = {
  apiUrl: 'https://api.example.com',
  production: false,
  maxRetries: 3
};
