// data.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  private parentToChild = new Subject<string>();
  private childToParent = new Subject<number>();

  parentToChild$ = this.parentToChild.asObservable();
  childToParent$ = this.childToParent.asObservable();

  sendToChild(message: string) {
    this.parentToChild.next(message);
  }

  sendToParent(count: number) {
    this.childToParent.next(count);
  }
}
