import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[appResponsiveSize]',
})
export class ResponsiveSizeDirective implements OnInit, OnDestroy {
  @Input() appResponsiveSize: { sm: string; md: string; lg: string } = {
    sm: '12px',
    md: '16px',
    lg: '20px'
  };

  private resizeSubscription!: Subscription;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.updateFontSize();
    this.resizeSubscription = fromEvent(window, 'resize')
      .pipe(debounceTime(100))
      .subscribe(() => this.updateFontSize());
  }

  ngOnDestroy() {
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }

  private updateFontSize() {
    const width = window.innerWidth;
    let size: string;

    if (width < 576) {
      size = this.appResponsiveSize.sm;
    } else if (width >= 576 && width < 992) {
      size = this.appResponsiveSize.md;
    } else {
      size = this.appResponsiveSize.lg;
    }

    this.renderer.setStyle(this.el.nativeElement, 'font-size', size);
  }
}
