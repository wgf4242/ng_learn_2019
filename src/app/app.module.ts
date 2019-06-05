import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { TodolistComponent } from './todolist/todolist.component';
import { StorageService } from './services/storage.service';
import { DomComponent } from './dom/dom.component';
import { NewsComponent } from './component/news/news.component';
import { HeaderComponent } from './component/header/header.component';
import { TransitionComponent } from './component/transition/transition.component';
import { HomeComponent } from './09-component-interaction/home/home.component';
import { HeaderInteractionComponent } from './09-component-interaction/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { NewsInteractionComponent } from './09-component-interaction/news/news.component';
import { LifecycleComponent, LifecycleParentComponent } from './10-lifecycle/lifecycle.component';
import { RxjsTestComponent } from './11-rxjs/rxjs-test.component';
import { HttpTestComponent } from './12-httpclient-test/http-test.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { RouterTestModule } from './13-router/router-test.module';
import { RouterModule } from '@angular/router';
import { NewsListComponent } from './14-router-params/news-list.component';
import { NewsDetailComponent } from './14-router-params/news-detail.component';
import { RouterParamsModule } from './14-router-params/router-params.module';
import { RouteroutletTestModule } from './15-router-outlet/routeroutlet-test.module';
import { UserModule } from './17-modules/user/user.module';
import { AppRoutingModule } from './app-routing.module';
import { NavListComponent } from './nav-list/nav-list.component';
import { AnimationComponent } from './19-animations/animation.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PopOverComponent } from './19-animations/01-basic-twostate/pop-over.component';
import {MultiStateAnimationComponent} from './19-animations/02-multi-state/multi-state-animation.component';
import {KeyFrameAnimationComponent} from './19-animations/03-keyframe-animation/key-frame-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TodolistComponent,
    DomComponent,
    NewsComponent,
    HeaderComponent,
    TransitionComponent,
    HomeComponent,
    HeaderInteractionComponent,
    NewsInteractionComponent,
    FooterComponent,
    LifecycleComponent,
    LifecycleParentComponent,
    RxjsTestComponent,
    HttpTestComponent,
    NewsListComponent,
    NewsDetailComponent,
    NavListComponent,
    AnimationComponent,
    PopOverComponent,
    MultiStateAnimationComponent,
    KeyFrameAnimationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule,
    RouterTestModule,
    RouterParamsModule,
    RouteroutletTestModule,
    UserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
