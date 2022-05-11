import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from '../../models/cartItem.interface';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem!: CartItem;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

}
