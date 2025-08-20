import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Structure01Component } from './01-structure/01.component';
import { Structure02Component } from './01-structure/02.component';
import { Switch01Component } from './01-structure/03.component';
import { Parent01Component } from './02-component/01.component';
import { Parent02Component } from './02-component/02.component';
import { Parent03Component } from './02-component/03.component';
import { Parent04Component } from './02-component/04.component';
import { Parent05Component } from './02-component/05.component';
import { Attr01Component } from './03-attr/01.component';
import { Attr02Component } from './03-attr/02.component';
import { Attr03Component } from './03-attr/03.component';
import { Sytel01Component,Sytel02Component,Sytel03Component } from './04-built/01.component';
import { NgSytel01Component,NgSytel02Component,NgSytel03Component } from './04-built/02.component';
import { Class01Component } from './04-built/03.component';
import { NgClass01Component,NgClass02Component,NgClass03Component } from './04-built/04.component';
import { NgModel01Component,NgModelGroup01Component } from './04-built/05.component';
import { FormControl01Component } from './04-built/06.component';
import { BaseForm01Component } from './04-built/07.component';
import { FormGroupName01Component } from './04-built/08.component';
import { FormArray01Component } from './04-built/09.component';
import { FormBuilder01Component,FormBuilder02Component,FormBuilder03Component } from './04-built/10.component';
import { Hidden01Component,Title01Component,Tabindex01Component } from './04-built/11.component';


const routes: Routes = [
  {
    path: 'structure',
    children: [
        { path: '01',component: Structure01Component, title: '*ngFor指令' },
        { path: '02',component: Structure02Component, title: 'ngIf指令' },
        { path: '03',component: Switch01Component, title: 'ngSwitch指令' },
    ],
  },
  {
    path: 'component',
    children: [
        { path: '01',component: Parent01Component, title: '组件指令' },
        { path: '02',component: Parent02Component, title: '父传子' },
        { path: '03',component: Parent03Component, title: '子传父' },
        { path: '04',component: Parent04Component, title: '使用ref' },
        { path: '05',component: Parent05Component, title: 'dataService' },
    ],
  },
  {
    path: 'attr',
    children: [
        { path: '01',component: Attr01Component, title: '基础属性指令' },
        { path: '02',component: Attr02Component, title: '带参数指令' },
        { path: '03',component: Attr03Component, title: '响应式属性指令' },
    ],
  },
  {
    path: 'built',
    children: [
        { path: '01',component: Sytel01Component, title: 'style样式-1' },
        { path: '02',component: Sytel02Component, title: 'style样式-2' },
        { path: '03',component: Sytel03Component, title: 'style样式-3' },
        { path: '04',component: NgSytel01Component, title: 'ngstyle样式-1' },
        { path: '05',component: NgSytel02Component, title: 'ngstyle样式-2' },
        { path: '06',component: NgSytel03Component, title: 'ngstyle样式-3' },
        { path: '07',component: Class01Component, title: 'class样式' },
        { path: '08',component: NgClass01Component, title: 'ngClass样式-1' },
        { path: '09',component: NgClass02Component, title: 'ngClass样式-2' },
        { path: '10',component: NgClass03Component, title: 'ngClass样式-3' },
        { path: '11',component: NgModel01Component, title: 'ngModel绑定' },
        { path: '12',component: NgModelGroup01Component, title: 'ngModelGroup绑定' },
        { path: '13',component: FormControl01Component, title: 'formControl - 独立控件' },
        { path: '14',component: BaseForm01Component, title: 'formGroup + formControlName - 基本表单' },
        { path: '15',component: FormGroupName01Component, title: 'formGroupName - 嵌套分组' },
        { path: '16',component: FormArray01Component, title: 'formArrayName - 动态表单数组' },
        { path: '17',component: FormBuilder01Component, title: 'FormBuilder创建FormControl' },
        { path: '18',component: FormBuilder02Component, title: 'FormBuilder创建FormGroup' },
        { path: '19',component: FormBuilder03Component, title: 'FormBuilder创建FormArray' },
        { path: '20',component: Hidden01Component, title: 'html-隐藏' },
        { path: '21',component: Title01Component, title: 'html-提示' },
        { path: '22',component: Tabindex01Component, title: 'html-标签索引' },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
