//sempre que adicionamos uma propiedade a um objeto, é criada uma idêntica no prototype
//podemos substituir a do prototype
class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this,cor = cor;
    }
    latir(){
        console.log("au au");
    }

}

Cachorro.prototype.raca = 'SRD';
Cachorro.prototype.patas = 4;

let labrador = new Cachorro('Labrador', "Amarelo");

console.log(labrador.patas);

labrador.latir();

console.log(Cachorro.prototype.raca);
console.log(labrador.raca);