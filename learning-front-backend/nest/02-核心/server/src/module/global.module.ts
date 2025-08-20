import { Module, Global } from '@nestjs/common';

@Global()
@Module({
  providers: [
    {
      provide: 'Global',
      useValue: { baseUrl: '/api' },
    },
  ],
  exports: [
    {
      provide: 'Global',
      useValue: { baseUrl: '/api' },
    },
  ],
})
export class GlobalModule {}
