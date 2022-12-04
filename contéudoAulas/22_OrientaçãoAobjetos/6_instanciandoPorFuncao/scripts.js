//construtores são formas de instanciar uma classe em uma linguagem de programação
//instanciar = criar um objeto novo;
//no construtor já podemos definir propiedades
function criarCachorro(raca, patas, cor) {
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    cachorro.latir = function(){
        console.log("au au");
    }
    return cachorro;
}
let pastorBelga = criarCachorro("Pastor Belga", 4, "Preto");

console.log(pastorBelga);
pastorBelga.latir();