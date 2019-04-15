import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { TodolistComponent } from './todolist/todolist.component';
import {StorageService} from './services/storage.service';
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
    RxjsTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
