import {Component} from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

enum State {photoState, enlarge, spin}

@Component({
  templateUrl: './multi-state-animation.component.html',
  animations: [
    trigger('photoState', [
      state('move', style({
        transform: 'translateX(-100%) translateY(50px)',
      })),
      state('enlarge',   style({
        transform: 'scale(1.5)',
      })),
      state('spin',   style({
        transform: 'rotateY(180deg) rotateZ(90deg)',
      })),
      transition('spin => move', animate('2000ms ease-out')),
      transition('* => *', animate('500ms ease')),
    ])
  ]})
export class MultiStateAnimationComponent {
  stateName = null;

  changePosition(move: string) {
    this.stateName = move;
  }
}
