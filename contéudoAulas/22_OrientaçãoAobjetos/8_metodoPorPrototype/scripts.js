//além de propiedades, podemos criar a classe base já com métodos
//basta definir ao prototype o método desejado
function Cachorro(raca, patas, cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;

}

Cachorro.prototype.uivar = function(){
    console.log("auuuu");
}
//podemos atrelar um outro novo método ao prototype (classe)

Cachorro.prototype.latir = function(){
    console.log("au au");
}
let husky = new Cachorro("Husky", 4, "marrom");

husky.uivar();
console.log(husky);
husky.latir();
//essa é a maneira mais correta de criar um novo método, atrelar ao prototype dele