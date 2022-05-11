import { Produto } from "./produto.interface";

export interface CartItem {
  quantidade: number;
  produto: Produto;
}
