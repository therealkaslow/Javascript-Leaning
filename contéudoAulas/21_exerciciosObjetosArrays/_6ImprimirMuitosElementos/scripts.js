//crie dois arrays, um com mais de 5 elementos e outro com menos;
//faça uma função que verifica o número de elementos;
//se possuir menos que 5, imprima "poucos elementos" no console;
//se tiver mais, imprima "muitos elementos";
const pokemons = ["metapod", "panto", "cu de madeira"];

const insetos = ["besouro", "formiga", "borboleta", "maribondo", "panto"];

function verificarNumero(arr){
    if (arr.length >= [5]){
        console.log("muitos elementos");
    } else {
        console.log("poucos elementos");
    }
}
console.log(verificarNumero(pokemons));

console.log(verificarNumero(insetos));