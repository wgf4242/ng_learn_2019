import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public keyword: string;
  public historyList: any[] = [];

  constructor(public storageService: StorageService) {
    // let s = this.storageService.get();
    // console.log(s);
  }

  ngOnInit() {
    console.log('刷新页面会触发这个生命周期函数');

    var searchlist:any = this.storageService.get('searchlist');
    if(searchlist) {
      this.historyList = searchlist;
    }
  }

  doSearch() {
    if (this.historyList.indexOf(this.keyword) === -1) {
      this.historyList.push(this.keyword);

      this.storageService.set('searchlist', this.historyList)
    }

    this.keyword = '';

    console.log(this.keyword);
  }

  deleteHistory(key) {
    console.log(key);

    this.historyList.splice(key, 1);
  }
}
