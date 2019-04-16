import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styles: []
})
export class NewsListComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goNewsContent() {
    // 路由跳转   普通路由和动态路由
    this.router.navigate(['/14-router-params/news-detail/', '1243']);
  }

  goHome() {
    this.router.navigate(['/']);
  }

  goNews() {
    // 跳转并进行get传值
    let queryParams = { queryParams: { id: 123 } };
    this.router.navigate(['/14-router-params/news-detail/'], queryParams);
  }
}
