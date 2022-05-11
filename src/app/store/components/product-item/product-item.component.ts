import { Component, Input, OnInit } from '@angular/core';
import { Produto } from 'src/app/core/models/produto.interface';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  val2: number = 3;
  @Input() produto!: Produto;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addProdutoToCart() {
    this.cartService.addOrIncrementProductToCart(this.produto);
  }

}
