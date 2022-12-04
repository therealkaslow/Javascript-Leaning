//Symbols são propiedades únicas, que não podem ser alteradas e nem criadas duas vezes
//podemos utilizar como uma constante, só que para propiedade de objeto
class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }
    latir() {
        console.log('au au');
    }
}
//essa era a forma antiga antes do symbol
Cachorro.prototype.patas = 4;
//agora com o symbol temos que criar uma variável
let patas = Symbol();

Cachorro.prototype.raca = 'SRD';
Cachorro.prototype[patas] = 4;

let labrador = new Cachorro('labrador', 'Amarelo');

labrador.latir();

console.log(Cachorro.prototype.raca);
console.log(labrador.raca);

//para acessar o symbol

console.log(Cachorro.prototype[patas]);
console.log(labrador[patas]);