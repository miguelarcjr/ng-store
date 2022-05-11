import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/cartItem.interface';
import { CartService } from '../../services/cart.service';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-cart-item-list',
  templateUrl: './cart-item-list.component.html',
  styleUrls: ['./cart-item-list.component.scss']
})
export class CartItemListComponent implements OnInit {

  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.listenCartItems();
  }

  listenCartItems() {
    this.cartService.cartItemSub.subscribe(cartItems => {
      this.cartItems = [];
      for (const i of cartItems) {
        this.cartItems.push(i);
      }
    }
    );
  }



}
