import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListComponent } from './news-list.component';
import { NewsDetailComponent } from './news-detail.component';

const routes: Routes = [
  { path: '14-router-params/news-list', component: NewsListComponent },
  { path: '14-router-params/news-detail', component: NewsDetailComponent },
  { path: '14-router-params/news-detail/:id', component: NewsDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouterParamsRoutingModule { }
