import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from './httpservice.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {
  public list: any[] = [];
  constructor(
    public http: HttpClient,
    public httpService: HttpserviceService
  ) {}

  ngOnInit() {}

  getData() {
    // 服务器必须允许跨域
    let api = 'http://a.itying.com/api/productlist';
    this.http.get(api).subscribe((response: any) => {
      console.log(response);
      this.list = response.result;
    });
  }
  doLogin() {
    // 手动设置请求的类型
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    // 存在跨域
    let api = 'http://127.0.0.1:3000/dologin';
    this.http
      .post(api, { username: '张三', age: 20 }, httpOptions)
      .subscribe(response => {
        console.log(response);
      });
  }
  getJsonpData() {
    // jsonp请求 服务器必须得支持jsonp
    /*
    http://a.itying.com/api/productlist?callback=xxx
    http://a.itying.com/api/productlist?cb=xxx
   */
    let api = 'http://a.itying.com/api/productlist';
    this.http.jsonp(api, 'callback').subscribe(response => {
      console.log(response);
    });
  }
  getAxiosData() {
    console.log('axios获取数据');
    let api = 'http://a.itying.com/api/productlist';
    this.httpService.axiosGet(api).then(data => {
      console.log(data);
    });
  }
}
