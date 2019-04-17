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

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'path' },
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
  // { path: '**', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }