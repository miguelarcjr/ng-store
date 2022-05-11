import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './pages/store/store.component';
import { ProductItemListComponent } from './components/product-item-list/product-item-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    StoreComponent,
    ProductItemListComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StoreRoutingModule
  ]
})
export class StoreModule { }
