//é uma outra forma de escrever funções, muito bem utilizada em outros frameworks modernos, poŕem n~ao deve substituir as functions por completo.
const soma = (valor) => {
    return valor * 10 + 20;
}
console.log(soma(300));

const olá = () => {
    return console.log("olá mundo!");
}
olá();

let vezes = (a,b) => {
    return a * b;
}
console.log(vezes(30,10));