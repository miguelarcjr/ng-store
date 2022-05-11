import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from '../../models/cartItem.interface';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-input-increment',
  templateUrl: './input-increment.component.html',
  styleUrls: ['./input-increment.component.scss']
})
export class InputIncrementComponent implements OnInit {
  @Input() cartItem!: CartItem;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  increment() {
    this.cartService.addOrIncrementProductToCart(this.cartItem.produto);
  }

  decrement() {
    this.cartService.removeOrDecrementProductToCart(this.cartItem.produto);
  }

}
