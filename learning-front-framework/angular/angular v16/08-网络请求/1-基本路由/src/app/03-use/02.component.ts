import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'use-02',
  template:`
    <a (click)="enterHome()">首页</a><br>
    <a (click)="enterAbout()">关于</a><br>
    <a (click)="enterContact()">内容</a>
  `
})
export class Use02Component {
  constructor(private router: Router) {}
  enterHome(){
     this.router.navigate(['/home']);
  }
  enterAbout(){
     this.router.navigate(['/about']);
  }
  enterContact(){
     this.router.navigate(['/contact']);
  }
}
