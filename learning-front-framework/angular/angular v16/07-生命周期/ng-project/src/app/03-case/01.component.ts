
import {
  Component, Input, OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy,
  SimpleChanges, ContentChild, ViewChild, ElementRef
} from '@angular/core';
import { interval, Subscription } from 'rxjs';


// 用户列表子组件
@Component({
  selector: 'app-user-list',
  template: `
    <div class="user-list">
      <h3>用户列表 ({{users.length}})</h3>
      <ul>
        <li *ngFor="let user of users">{{user}}</li>
      </ul>
    </div>
  `,
  styles: [`
    .user-list {
      margin-top: 15px;
      padding: 10px;
      background-color: #f5f5f5;
    }
  `]
})
export class UserListComponent {
  @Input() users: string[] = [];
}


// 父组件
@Component({
  selector: 'app-user-counter',
  template: `
    <div class="counter-container">
      <h2 #counterTitle>用户计数器</h2>

      <div class="content-projection">
        <ng-content></ng-content>
      </div>

      <div class="counter-display">
        <p>当前用户数: {{currentCount}}</p>
        <p>最大用户数: {{maxCount}}</p>
        <p>变化次数: {{changeCount}}</p>
      </div>

      <div class="actions">
        <button (click)="increment()">增加用户</button>
        <button (click)="decrement()">减少用户</button>
      </div>

      <app-user-list [users]="getUsers()"></app-user-list>
    </div>
  `,
  styles: [`
    .counter-container {
      border: 1px solid #ccc;
      padding: 20px;
      margin: 20px;
      max-width: 500px;
    }
    .actions {
      margin: 15px 0;
    }
    button {
      margin-right: 10px;
    }
  `]
})
export class UserCounterComponent implements
  OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() initialCount = 0;
  @Input() maxCount = 10;

  @ContentChild('projectedContent') projectedContent!: ElementRef;
  @ViewChild('counterTitle') counterTitle!: ElementRef;
  @ViewChild(UserListComponent) userListComponent!: UserListComponent;

  currentCount = 0;
  changeCount = 0;
  previousCount = 0;
  private countSubscription!: Subscription;
  private users: string[] = [];

  // 1. ngOnChanges - 输入属性变化时调用
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges 触发', changes);

    if (changes['initialCount'] && !changes['initialCount'].firstChange) {
      this.currentCount = changes['initialCount'].currentValue;
      console.log('初始计数更新为:', this.currentCount);
    }

    if (changes['maxCount']) {
      console.log('最大计数从', changes['maxCount'].previousValue,
                 '变为', changes['maxCount'].currentValue);
    }
  }

  // 2. ngOnInit - 组件初始化
  ngOnInit() {
    console.log('ngOnInit 触发');
    this.currentCount = this.initialCount;
    this.previousCount = this.currentCount;

    // 模拟从API获取用户数据
    this.users = this.generateRandomUsers(5);

    // 设置定时器更新计数
    this.countSubscription = interval(5000).subscribe(() => {
      console.log('定时检查用户数...');
      this.checkCount();
    });
  }

  // 3. ngDoCheck - 自定义变更检测
  ngDoCheck() {
    console.log('ngDoCheck 触发');

    if (this.currentCount !== this.previousCount) {
      this.changeCount++;
      console.log(`计数从 ${this.previousCount} 变为 ${this.currentCount}`);
      this.previousCount = this.currentCount;

      // 当计数变化时更新用户列表
      this.updateUsers();
    }
  }

  // 4. ngAfterContentInit - 内容投影初始化后
  ngAfterContentInit() {
    console.log('ngAfterContentInit 触发');
    if (this.projectedContent) {
      console.log('投影内容:', this.projectedContent.nativeElement.textContent);
    }
  }

  // 5. ngAfterContentChecked - 内容投影检查后
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked 触发');
  }

  // 6. ngAfterViewInit - 视图初始化后
  ngAfterViewInit() {
    console.log('ngAfterViewInit 触发');
    console.log('标题元素:', this.counterTitle.nativeElement.textContent);
    console.log('用户列表组件:', this.userListComponent);
  }

  // 7. ngAfterViewChecked - 视图检查后
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked 触发');
  }

  // 8. ngOnDestroy - 组件销毁前
  ngOnDestroy() {
    console.log('ngOnDestroy 触发');
    this.countSubscription.unsubscribe();
    console.log('已取消订阅定时器');
  }

  // 组件方法
  increment() {
    if (this.currentCount < this.maxCount) {
      this.currentCount++;
    }
  }

  decrement() {
    if (this.currentCount > 0) {
      this.currentCount--;
    }
  }

  getUsers(): string[] {
    return this.users.slice(0, this.currentCount);
  }

  private generateRandomUsers(count: number): string[] {
    const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Henry'];
    return Array.from({length: count}, () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      return `${randomName}${Math.floor(Math.random() * 100)}`;
    });
  }

  private updateUsers() {
    if (this.currentCount > this.users.length) {
      const newUsers = this.generateRandomUsers(this.currentCount - this.users.length);
      this.users = [...this.users, ...newUsers];
    }
  }

  private checkCount() {
    console.log('当前用户数检查:', this.currentCount);
    if (this.currentCount > this.maxCount * 0.8) {
      console.warn('警告: 用户数接近最大值!');
    }
  }
}
