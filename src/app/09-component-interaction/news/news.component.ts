import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-news-09',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsInteractionComponent implements OnInit {
  @ViewChild('footer') footer: any;

  constructor() {}

  ngOnInit() {}

  getChildMsg() {
    alert(this.footer.msg);
  }

  getChildRun() {
    this.footer.run();
  }

  run(e: any) {
    console.log(e); // 子组件给父组件广播的数据
    alert('我是父组件的run方法');
  }
}
