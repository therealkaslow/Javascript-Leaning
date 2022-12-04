//em muitas linguagens temso a possibilidade de instanciar um objeto com new
//no JS também podemos:
function Cachorro(raca, patas, cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.latir = function(){
        console.log('au au');
    }
}

let husky = new Cachorro("husky", 4, "preto");

husky.latir();
console.log(husky);