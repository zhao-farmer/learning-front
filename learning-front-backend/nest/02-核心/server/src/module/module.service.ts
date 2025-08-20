import { Injectable } from '@nestjs/common';

@Injectable()
export class ModuleService {
  useService() {
    return 'useService';
  }
}
