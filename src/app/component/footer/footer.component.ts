import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Output() outer = new EventEmitter();
  msg = '我是一个子组件';
  constructor() { }

  ngOnInit() {
  }

  run() {
    alert('我是子组件的run方法');
  }

  sendParent() {
    this.outer.emit('我是子组件的数据');
  }
}
