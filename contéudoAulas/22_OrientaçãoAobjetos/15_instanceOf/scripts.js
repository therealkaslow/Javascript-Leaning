//podemos verificar quem é o pai do objeto utilizando o instancOf
class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}

class Marinho {
    constructor(nadadeiras){
        this.nadadeiras = nadadeiras;
    }
}

class Cachorro extends Marinho {
    constructor(patas, raca){
        super(patas, patas);
        this.raca = raca;
    }
}

console.log(new Cachorro instanceof Mamifero);
// esse método retorna sempre verdadeiro ou falso o "instanceOf"

if(new Cachorro instanceof Mamifero == true){
    console.log('a instancia do cachorro é mamífero')
} else {
    console.log('a instancia do cachorro não é mamífero');
}