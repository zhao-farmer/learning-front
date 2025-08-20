import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'

@Component({
  selector: 'rxjs-01',
  template: `
    <input #searchInput placeholder="搜索...">
    <ul>
      <li *ngFor="let item of results">{{ item }}</li>
    </ul>
  `
})
export class Rxjs01Component implements AfterViewInit {

  @ViewChild('searchInput') input!: ElementRef;
  results: string[] = [];

  // 页面组件加载完成后调用
  ngAfterViewInit() {
    console.log(this.input);

    fromEvent(this.input.nativeElement, 'input').pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((e: any) => this.searchApi(e.target.value))
    ).subscribe(data => this.results = data);
  }

  searchApi(term: string): Promise<string[]> {
    // 实际项目中替换为真实HTTP请求
    return new Promise(resolve => {
      setTimeout(() => resolve([`${term}结果1`, `${term}结果2`]), 500);
    });
  }
}
