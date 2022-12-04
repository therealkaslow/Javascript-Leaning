//o get serve para resgatar o valor de uma propiedade
//o set serve para alterar o valor de uma propiedade
class Cachorro {
    constructor(raca) {
        this.raca = raca;
    }
    latir(){
        console.log('au au');
    }
    //definição dos parâmetros get e set
    get getCor(){
        return this.cor;
    }
    set setCor(cor){
        this.cor = cor;
    }
}
let pastor = new Cachorro('Pastor Alemão', 'sem cor'); // aqui instancia um novo objeto

console.log(pastor);

pastor.setCor = "Marrom"; //aqui coloca a propiedade no objeto existente

console.log(pastor.getCor);