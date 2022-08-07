// estruturas de repeticao while, é sempre enqquanto a condicao for falsa, continuar executando até a condicao for verdadeira.

let x = 10;

while (x > 0) {
    console.log(" o x é " + x);
    x = x - 1;
}

let minValor = 0;

while (minValor <= 10) {
    console.log("o valor maximo é: " + minValor);
    minValor = minValor + 1;
}

//exemplo de um loop infinito

let loopInfinito = 0;

while (loopInfinito >= 0) {
    console.log(loopInfinito);
}
