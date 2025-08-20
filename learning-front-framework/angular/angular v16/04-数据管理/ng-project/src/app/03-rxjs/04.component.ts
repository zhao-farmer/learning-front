import { Component, OnDestroy } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  template: `计数: {{ count }}`
})
export class Rxjs04Component implements OnDestroy {
  count = 0;
  private destroy$ = new Subject<void>();

  constructor() {
    interval(1000).pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => this.count++);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
