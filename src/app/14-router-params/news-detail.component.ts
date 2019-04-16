import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styles: []
})
export class NewsDetailComponent implements OnInit {
  k: any;
  p: any;

  constructor(private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.route.queryParams.subscribe(v => {
      console.log(v);
      this.k = v.id;
    });
    this.route.params.subscribe((data) => {
      console.log(data);
      this.p = data.id;
    });
  }

}
