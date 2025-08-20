import { Module, DynamicModule, Global } from '@nestjs/common';

interface Options {
  path: string;
}

@Global()
@Module({})
export class DynModule {
  static forRoot(options: Options): DynamicModule {
    return {
      module: DynModule,
      providers: [
        {
          provide: 'Dynamic',
          useValue: { baseUrl: '/api' + options.path },
        },
      ],
      exports: [
        {
          provide: 'Dynamic',
          useValue: { baseUrl: '/api' + options.path },
        },
      ],
    };
  }
}
