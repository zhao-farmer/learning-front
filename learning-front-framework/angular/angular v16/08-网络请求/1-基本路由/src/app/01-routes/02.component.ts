import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// 普通路由
@Component({
  selector: 'route-02',
  template: `
    <h1>带参数路由</h1>
  `,
})
export class UserProfileComponent implements OnInit {

  // 依赖注入
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {

    // 方式1: snapshot (适用于只获取一次)
    const id1 = this.route.snapshot.paramMap.get('id');

    // 方式2: observable (适用于参数会变化的情况)
    this.route.paramMap.subscribe((params) => {
      const id2 = params.get('id');
    });
  }
}
