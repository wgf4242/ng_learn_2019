import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `
      h1 {
        text-align: center;
        color: #fff;
        background: #000;
      }
    `
  ]
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  run() {
    console.log('我是header里面的run方法');

  }
}
