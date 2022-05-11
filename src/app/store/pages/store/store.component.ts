import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/core/models/produto.interface';
import { ProdutoService } from 'src/app/core/services/produto.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { }
  produtos: Produto[] = [];

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos() {
    this.produtoService.getAll().subscribe(produtos => {
      this.produtos = produtos;
      console.log(this.produtos)
    }
    );
  }



}
