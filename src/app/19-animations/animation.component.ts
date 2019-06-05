import {Component, OnInit} from '@angular/core';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations: [
    trigger('myAwesomeAnimation', [
      state('small', style({ // 状态1 small ,原状态
        transform: 'scale(1)',
      })),
      state('large', style({ // 状态2 large ,放大1.2倍
        transform: 'scale(1.2)',
      })),
      transition('small <=> large', animate('300ms ease-in', keyframes([
        style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),    // offset 是执行的顺序，从上向下排列,第一帧在 -75%的位置
        style({opacity: 1, transform: 'translateY(35px)',  offset: 0.5}), // 第二帧在 原位置向下35px处
        style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})  // 第三帧弹回原处, 弹簧效果
      ]))),
    ]),
  ]
})
export class AnimationComponent implements OnInit {
  state = 'small';

  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

  constructor() {
  }

  ngOnInit() {
  }

}
