import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_CONFIG, DEFAULT_CONFIG } from './services/config';
import { LoggerService } from './services/logger.service';

import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent.component';
import { ChildComponent } from './components/child.component';
import { StandaloneComponent } from './components/standalone.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    StandaloneComponent // 导入独立组件
  ],
  providers: [
    // 根级提供者
    LoggerService,

    // 非类依赖提供
    { provide: APP_CONFIG, useValue: DEFAULT_CONFIG },

    // 工厂提供者示例
    {
      provide: 'API_KEY',
      useFactory: () => {
        return localStorage.getItem('apiKey') || 'default-key';
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
