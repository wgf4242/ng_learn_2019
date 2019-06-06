import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterAnimationRoutingModule} from './router-animation-routing.module';
import { RouterAnimationComponent } from './router-animation.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    RouterAnimationComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterAnimationRoutingModule
  ],
  providers: [],
  bootstrap: [RouterAnimationComponent]
})
export class RouterAnimationModule { }
