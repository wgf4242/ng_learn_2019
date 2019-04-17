import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { OrderComponent } from './components/order/order.component';
import { AddressComponent } from './components/address/address.component';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [ProfileComponent, OrderComponent, AddressComponent, UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
