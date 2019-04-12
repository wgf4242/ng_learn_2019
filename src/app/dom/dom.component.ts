import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dom',
  templateUrl: './dom.component.html',
  styles: []
})
export class DomComponent implements OnInit {

  flag = true;

  constructor() {}

  ngOnInit() {
    // 组件和指令初始化完成， 并不是真正的dom加载完成
    let oBox = document.getElementById('box');
    console.log(oBox.innerHTML);
    oBox.style.color = 'red';
  }

  // 使用ngif时获取不到，因为组件没有加载完成
  /* let oBox1 = document.getElementById('box1')
    console.log(oBox1.innerHTML);
    oBox1.style.color='red';
   */

  // 视图加载完成以后触发 dom加载完成(建议把dom操作放在这里)
  ngAfterViewInit(): void {
    let oBox1 = document.getElementById('box1');
    console.log(oBox1.innerHTML);
    oBox1.style.color = 'red';
  }
}
