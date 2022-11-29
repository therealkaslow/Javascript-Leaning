//o prototype do javascript pode ser chamado de classe
//pois nas outras linguagens, uma class é um molde de um objeto
//ou seja, podemos criar diversos objetos em cima de um prototype
const cachorro = {
    raca: 'SRD',
    patas: 4,
    latir: function () {
        console.log("au au");
    }
}
cachorro.latir();
console.log(cachorro.patas);
console.log(cachorro.raca);

let doberman = Object.create(cachorro);

doberman.raca = "Doberman";
console.log(doberman.raca);
doberman.latir();

let pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "PASTOR ALEMÃO";

console.log(pastorAlemao.raca);