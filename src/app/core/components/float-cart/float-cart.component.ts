import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { FreteService } from '../../services/frete.service';

@Component({
  selector: 'app-float-cart',
  templateUrl: './float-cart.component.html',
  styleUrls: ['./float-cart.component.scss']
})
export class FloatCartComponent implements OnInit {

  cep: string = ''
  subtotal: number = 0;
  total: number = 0;
  valorFrete: number = 0;

  constructor(private cartService: CartService, private freteService: FreteService, private router: Router) { }

  ngOnInit(): void {
    this.listenCartItems();
  }

  calcSubTotal() {
    this.subtotal = 0;
    for (const i of this.cartService.cartItems) {
      this.subtotal += i.produto.valor * i.quantidade;
      this.total = this.subtotal;
      if(this.cep !== '') {
        this.calcFrete();
      }
    }
  }

  calcFrete() {
    if(this.cartService.cartItems.length > 0) {
      this.freteService.getValorTotalFrete(this.cep, this.cartService.cartItems).then(res => {
        this.valorFrete = res;
        this.total = this.subtotal + this.valorFrete;
      });
    }
  }

  listenCartItems() {
    this.cartService.cartItemSub.subscribe(cartItems => {
      this.calcSubTotal();
    }
    );
  }

  goToCart() {
    this.router.navigate(['cart']);
  }

}
