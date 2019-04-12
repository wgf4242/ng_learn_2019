import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-09',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderInteractionComponent implements OnInit {
  @Input() title = '';

  @Input() msg = '';

  @Input() run: any;

  @Input() home: any;

  constructor() { }

  ngOnInit() {
  }

  getParentMsg() {
    alert(this.msg);
  }

  getParentRun() {
    //获取父组件的数据
    // alert(this.msg);

    //执行父组件的run方法
    // this.run();

    // alert(this.home.msg);

    this.home.run();
  }

}
