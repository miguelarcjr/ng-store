import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { CartItem } from '../models/cartItem.interface';
import { FreteDTO } from '../models/dtos/freteDto';
import { FreteResponse } from '../models/dtos/freteResponse';

@Injectable({
  providedIn: 'root'
})
export class FreteService {

  constructor(private http: HttpClient) { }

  async getValorTotalFrete(cep: string, cartItems: CartItem[]): Promise<number> {
    let valorTotalFrete: number = 0;
    for (const item of cartItems) {
      const freteItem: FreteDTO = {
        cepOrigem: "90440-011",
        cepDestino: cep,
        peso: item.produto.peso,
        comprimento: item.produto.comprimento,
        altura: item.produto.altura,
        largura: item.produto.largura,
        diametro: item.produto.diametro,
        formato: "1",
        servico: "04014"
      };
      await lastValueFrom(this.http.post('https://gabrielidsm-fretecorreios.herokuapp.com/correios/frete', freteItem)  as Observable<FreteResponse> ).then(res => {
        const valor = parseFloat(res.valor.replace(/[^0-9,.]/g, '').replace(/[.]/g, '').replace(',', '.'));
        valorTotalFrete += valor*item.quantidade;
      });

    }

    return valorTotalFrete;
  }


}
