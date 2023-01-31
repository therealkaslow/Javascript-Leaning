//crie uma classe que simula um carrinho de compras de um e-commerce
//propiedades itens, quantidade total, valor total;
//crie os metodos para adicionar e remover itens;

class Carrinho {
    constructor(itens, qtd, valorTotal) {
      this.itens = itens;
      this.qtd = qtd;
      this.valorTotal = valorTotal;
    }
   
    addItem(item) {
      let contador = 0;
      for (let itemCarrinho in this.itens) {
        if (this.itens[itemCarrinho].id == item.id) {
          this.itens[itemCarrinho].qtd += item.qtd;
          contador = 1;
        }
      }
      if (contador == 0) {
        this.itens.push(item);
      }
   
      this.qtd += item.qtd;
      this.valorTotal += item.preco * item.qtd;
    }
   
    removeItem(item) {
      for (let itemCarrinho in this.itens) {
        if (this.itens[itemCarrinho].id == item.id) {
          let obj = this.itens[itemCarrinho];
          let index = this.itens.findIndex(function (obj) {
            return obj.id == item.id;
          });
          
          this.qtd -= this.itens[itemCarrinho].qtd;
          this.valorTotal -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd;
          
          this.itens.splice(index, 1);
        
        }
      }
    }
  }
   
  let carrinho = new Carrinho(
    [],0,0
  );
   
  carrinho.addItem({ id: 01, nome: "Camiseta", qtd: 3, preco: 30 });
  carrinho.addItem({ id: 02, nome: "Calça", qtd: 2, preco: 75 });
  carrinho.addItem({ id: 03, nome: "Meias", qtd: 1, preco: 10 });
   
  console.log(carrinho);
  carrinho.removeItem({ id: 01});
  console.log(carrinho);