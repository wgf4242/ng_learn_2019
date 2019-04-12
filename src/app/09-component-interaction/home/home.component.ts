import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'This is title from Home';

  msg = '我是父组件的msg';

  constructor() { }

  ngOnInit() {
  }

  run() {
    alert('我是父组件的run方法');
  }
}
