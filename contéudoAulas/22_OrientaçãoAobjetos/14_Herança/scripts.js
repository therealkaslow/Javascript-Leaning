//Uma classe pode herdar as propiedades de outra classe por herança
//para isso utilizamos extends

class Mamifero {
    constructor(patas){
        this.patas = patas;
    }
}
class Cachorro extends Mamifero { // o extends serve para herdar o atributo da classe, que no case tá sendo o mamífero
    constructor(patas, raca, cor){
        super(patas, raca); // o super consegue mudar o valor da classe pai, passando os dois parâmetros, o primeiro é da classe local e o segundo é da classe pai
        this.raca = raca;
        this.cor = cor;
        // o super serve para copiar o atributo da classe pai que é o mamífero
    }
    get getCor(){
        return this.cor = cor;
    }
    set setCor(cor) {
        this.cor = cor;
    }
}

let orion = new Cachorro(4, "labrador com pastor belga");

console.log(orion);