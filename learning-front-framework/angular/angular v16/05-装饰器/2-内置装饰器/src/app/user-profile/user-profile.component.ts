import {
  Component, Input, Output, EventEmitter,
  ViewChild, ElementRef, HostListener,
  Inject, Optional, HostBinding, OnInit
} from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  // 1. 成员装饰器 - 输入属性
  @Input()
  userId!: number;

  // 2. 成员装饰器 - 输出事件
  @Output()
  profileUpdated = new EventEmitter<any>();

  // 3. 成员装饰器 - 视图查询
  @ViewChild('profileHeader', { static: true })
  profileHeader!: ElementRef<HTMLHeadingElement>;

  // 4. 成员装饰器 - 主机绑定
  @HostBinding('class.active')
  isActive = false;

  // 5. 成员装饰器 - 主机监听
  @HostListener('mouseenter')
  onMouseEnter() {
    this.isActive = true;
    console.log('鼠标进入');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isActive = false;
    console.log('鼠标离开');
  }

  // 组件状态
  userData: any;
  isLoading = true;
  theme = 'light';

  constructor(
    // 6. 参数装饰器 - 依赖注入
    @Inject('API_ENDPOINT') private apiEndpoint: string,
    @Optional() @Inject('DEFAULT_THEME') private defaultTheme: string
  ) {
    this.theme = defaultTheme || 'light';
  }

  ngOnInit() {
    this.loadUserData();
    console.log('标题元素:', this.profileHeader.nativeElement);
  }

  async loadUserData() {
    try {
      this.isLoading = true;
      const response = await fetch(`${this.apiEndpoint}/users/${this.userId}`);
      this.userData = await response.json();
    } catch (error) {
      console.error('加载用户数据失败', error);
    } finally {
      this.isLoading = false;
    }
  }

  updateProfile() {
    this.profileUpdated.emit({
      userId: this.userId,
      data: this.userData,
      timestamp: new Date()
    });
  }

  changeTheme(newTheme: string) {
    this.theme = newTheme;
  }
}
