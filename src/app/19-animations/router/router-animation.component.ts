import { Component } from '@angular/core';
import { slideInAnimation } from './route-animation';

@Component({
  templateUrl: './router-animation.component.html',
  styleUrls: [ './router-animation.component.scss' ],
  animations: [slideInAnimation]
})
export class RouterAnimationComponent  {
  name = 'Angular';
}
