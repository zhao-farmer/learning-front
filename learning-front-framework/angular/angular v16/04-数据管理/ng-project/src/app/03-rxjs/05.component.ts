import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'rxjs-05',
  template: `
    <input [formControl]="searchControl">
    <p>当前值: {{ searchValue }}</p>
  `
})
export class Rxjs05Component {
  searchControl = new FormControl('');
  searchValue: string | null = "";

  constructor() {
    this.searchControl.valueChanges.subscribe(value =>
      this.searchValue = value
    );
  }
}
