//Argumentos Opcionais
//Podemos pre-determinar um valor para um argumento também:
function potencia(base, exp=2) {
    return Math.pow(base, exp);
}

console.log(potencia(2));

console.log(potencia(2,2));

console.log(potencia(2,3));