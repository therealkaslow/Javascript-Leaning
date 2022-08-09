//se só tem um parâmetro podemos remover os parênteses do argumento e o return para ter um aspecto mais clean code, Se a expressão for pequena, pode até ser feita em uma linha sem prejudicar a leitura do código.

const multiplicarPorDois = (x) => {
    
    return x * 2;
}
console.log(multiplicarPorDois(2));

//um exemplo mais clean code de arrow function, mas sempre ter cautela se isso for deixar a leitura do código mais complexa para o próximo programador:

const multiplicarPorDois2 = x => x * 2;

console.log(multiplicarPorDois2(10));