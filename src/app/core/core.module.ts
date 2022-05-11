import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { SharedModule } from '../shared/shared.module';
import { TopbarComponent } from './components/topbar/topbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartItemListComponent } from './components/cart-item-list/cart-item-list.component';
import { InputIncrementComponent } from './components/input-increment/input-increment.component';
import { FloatCartComponent } from './components/float-cart/float-cart.component'



@NgModule({
  declarations: [
    MainLayoutComponent,
    TopbarComponent,
    CartComponent,
    CartItemComponent,
    CartItemListComponent,
    InputIncrementComponent,
    FloatCartComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ]
})
export class CoreModule { }
