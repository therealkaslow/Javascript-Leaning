//não podemos adicionar propiedades na classe, só via prototype;
//e a classe só aceita métodos
class Cachorro {
    cosntructor(raca, patas, cor){
        this.raca = raca;
        this.cor = cor;
    }
    latir(){
    console.log("au au");
}

}
Cachorro.prototype.patas = 4;

let labrador = new Cachorro("Labrador", "Amarelo");

console.log(labrador);
labrador.latir();