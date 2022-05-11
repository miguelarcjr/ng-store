import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cartItem.interface';
import { Produto } from '../models/produto.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: CartItem[] = [];
  cartItemSub: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);

  constructor() { }

  addOrIncrementProductToCart(product: Produto) {
    const cartItem = this.cartItems.find(item => item.produto.id === product.id);
    if (cartItem) {
      cartItem.quantidade++;
    }
    else {
      this.cartItems.push({
        quantidade: 1,
        produto: product
      });
    }
    this.cartItemSub.next(this.cartItems);

  }

  removeOrDecrementProductToCart(product: Produto) {
    const cartItem = this.cartItems.find(item => item.produto.id === product.id);
    if (cartItem) {
      cartItem.quantidade--;
      if (cartItem.quantidade === 0) {
        this.cartItems = this.cartItems.filter(item => item.produto.id !== product.id);
      }
    }
    this.cartItemSub.next(this.cartItems);
  }

  clearCart() {
    this.cartItems = [];
    this.cartItemSub.next(this.cartItems);
  }
}
