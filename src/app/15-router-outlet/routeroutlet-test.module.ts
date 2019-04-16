import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteroutletTestRoutingModule } from './routeroutlet-test-routing.module';
import { RouteroutletHomeComponent } from './routeroutlet-home/routeroutlet-home.component';
import { RouteroutletProductComponent } from './routeroutlet-product/routeroutlet-product.component';
import { ProductListComponent } from './routeroutlet-product/product-list.component';
import { ProductContentComponent } from './routeroutlet-product/product-content.component';
import { RouteroutletNewsComponent } from './routeroutlet-news/routeroutlet-news.component';
import { RouteroutletSettingsComponent } from './routeroutlet-home/routeroutlet-settings/routeroutlet-settings.component';
import { RouteroutletWelcomeComponent } from './routeroutlet-home/routeroutlet-welcome/routeroutlet-welcome.component';
import { RouteroutletComponent } from './routeroutlet-test.component';

@NgModule({
  declarations: [
    RouteroutletComponent,
    RouteroutletHomeComponent,
    RouteroutletSettingsComponent,
    RouteroutletWelcomeComponent,
    RouteroutletProductComponent,
    ProductListComponent,
    ProductContentComponent,
    RouteroutletNewsComponent
  ],
  imports: [CommonModule, RouteroutletTestRoutingModule]
})
export class RouteroutletTestModule {}
