//crie um array a partir de uma frase;
//imprima cada palavra do array no console por meio de um for;
let criandoArrayFrase = "sim, eu sou um programador javascript";

const arrFrase = criandoArrayFrase.split(" ");

for(let i = 0; i < criandoArrayFrase.length; i++){
    console.log(arrFrase[i]);
};