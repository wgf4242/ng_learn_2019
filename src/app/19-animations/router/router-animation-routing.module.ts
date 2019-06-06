import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RouterAnimationComponent} from './router-animation.component';

const routes: Routes = [
  // {path: '', component: RouterAnimationComponent},
  {
    path: '',
    component: RouterAnimationComponent,
    children: [
      {path: 'home', component: HomeComponent, data: {animation: 'Home'}},
      {path: 'about', component: AboutComponent, data: {animation: 'About'}},
      {path: 'contact', component: ContactComponent, data: {animation: 'Contact'}},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouterAnimationRoutingModule {
}
