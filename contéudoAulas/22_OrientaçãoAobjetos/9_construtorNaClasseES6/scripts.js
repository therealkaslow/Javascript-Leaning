//com a versão do ES6, uma possibilidade de criar uma classe com construtor foi adicionada 
//então não precisamos mais criar por meio de uma função veja
class Cachorro {
    constructor(raca,patas,cor) {
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }
}
let labrador = new Cachorro("Labrador", 4, "Amarelo");
console.log(labrador);