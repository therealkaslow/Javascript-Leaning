//crie um objeto calculadora
//que tem os seguintes métodos, somar, subtrair, multiplicar e dividir
//os métodos só devem aceitar dois parâmetros
//utilize cada um dos métodos e imprima os valores no console;
const calculadora = {
    somar: function(a, b){
        resultado = a + b;
        console.log("o resultado da soma é: " + resultado);
    },
    subtrair: function(a, b){
        resultado = a - b;
        console.log("o resultado da subtração é: " + resultado);
    },
    multiplicar: function(a , b){
        resultado = a * b;
        console.log("o resultado da multiplicação é: " + resultado);
    },
    dividir: function(a, b){
        resultadoDivisão = a / b;
        console.log("o resultado da divisão é: " + resultadoDivisão);
    }
}
console.log(calculadora.somar(10,10));
console.log(calculadora.subtrair(15,5)); 
console.log(calculadora.multiplicar(5,5));
console.log(calculadora.dividir(2,2))