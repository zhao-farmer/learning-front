// message.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
  // subject类型
  private messageSubject = new Subject<string>();

  // 对外暴露只读Observable
  messages$ = this.messageSubject.asObservable();

  send(message: string) {
    this.messageSubject.next(message);
  }

}
