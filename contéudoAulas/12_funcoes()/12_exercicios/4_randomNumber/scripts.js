//escreva uma função que retorne um número aleatório, o número máximo retornado deve ser apssado via parâmetro.
function maxNumber(min, max) {
    return Math.random() * (max - min) + min;
}

console.log("o número máximo é: " + maxNumber(500,1230));
//outra resolução mais específica
function randomNumber(num) {
    return Math.floor(Math.random() * num) + 1;
}
console.log("o numero aleatório é: " + randomNumber(20));
console.log("o numero aleatório é: " + randomNumber(80));
console.log("o numero aleatório é: " + randomNumber(900));