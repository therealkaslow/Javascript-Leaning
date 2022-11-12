//Métodos Shift() e Unshift()
//shift remove o primeiro elemento de um array;
//unshift adiciona um ou mais elementos no início de um array
 let carros = ["BMW", "Audi", "VW", "Fiat"];

 let removerPrimeiroCarro = carros.shift();

 console.log(removerPrimeiroCarro);
 console.log(carros);

 carros.unshift('Gurgel');

 console.log(carros);
 console.log(carros[0]);

