import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteroutletNewsComponent } from './routeroutlet-news/routeroutlet-news.component';
import { RouteroutletHomeComponent } from './routeroutlet-home/routeroutlet-home.component';
import { RouteroutletProductComponent } from './routeroutlet-product/routeroutlet-product.component';
import { RouteroutletComponent } from './routeroutlet-test.component';
import { RouteroutletSettingsComponent } from './routeroutlet-home/routeroutlet-settings/routeroutlet-settings.component';
import { RouteroutletWelcomeComponent } from './routeroutlet-home/routeroutlet-welcome/routeroutlet-welcome.component';
import { ProductListComponent } from './routeroutlet-product/product-list.component';
import { ProductContentComponent } from './routeroutlet-product/product-content.component';

const routes: Routes = [
    {
      path: '15-routeroutlet',
      component: RouteroutletComponent,
      children: [
        {
          path: 'routeroutlet-home',
          component: RouteroutletHomeComponent,
          children: [
            { path: 'welcome', component: RouteroutletWelcomeComponent },
            { path: 'settings', component: RouteroutletSettingsComponent }
          ]
        },

        { path: 'routeroutlet-news', component: RouteroutletNewsComponent },

        {
          path: 'routeroutlet-product',
          component: RouteroutletProductComponent,
          children: [
            { path: 'product-list', component: ProductListComponent },
            { path: 'product-content', component: ProductContentComponent },
          ]
        },
        { path: '', pathMatch: 'full', redirectTo: 'routeroutlet-home' }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteroutletTestRoutingModule { }
