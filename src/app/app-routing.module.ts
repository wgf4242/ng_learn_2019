import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { TodolistComponent } from './todolist/todolist.component';
import { DomComponent } from './dom/dom.component';
import { TransitionComponent } from './component/transition/transition.component';
import { HomeComponent } from './09-component-interaction/home/home.component';
import { NewsComponent } from './component/news/news.component';
import { NewsInteractionComponent } from './09-component-interaction/news/news.component';
import { LifecycleParentComponent } from './10-lifecycle/lifecycle.component';
import {NavListComponent} from './nav-list/nav-list.component';
import {AnimationComponent} from './19-animations/animation.component';
import {PopOverComponent} from './19-animations/01-basic-twostate/pop-over.component';
import {MultiStateAnimationComponent} from './19-animations/02-multi-state/multi-state-animation.component';
import {KeyFrameAnimationComponent} from './19-animations/03-keyframe-animation/key-frame-animation.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'nav' },
  { path: 'nav', component: NavListComponent },
  { path: 'app-search', component: SearchComponent },
  { path: 'app-todolist', component: TodolistComponent },
  { path: 'app-dom', component: DomComponent },
  { path: 'app-transition', component: TransitionComponent },
  { path: 'app-home', component: HomeComponent },
  { path: 'app-news', component: NewsComponent },
  { path: 'app-news-09', component: NewsInteractionComponent },
  { path: 'app-lifecycle', component: LifecycleParentComponent},
  { path: '18-user',    loadChildren: './18-lazyload-module/user/user.module#UserModule' },
  { path: '18-product', loadChildren: './18-lazyload-module/product/product.module#ProductModule' },
  { path: '18-article', loadChildren: './18-lazyload-module/article/article.module#ArticleModule' },
  { path: '19-animations', component: AnimationComponent},
  { path: '19-1-animations', component: PopOverComponent},
  { path: '19-2-animations', component: MultiStateAnimationComponent},
  { path: '19-3-animations', component: KeyFrameAnimationComponent},
  // { path: '**', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
