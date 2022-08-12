//escreva uma função que receba dois números, o primeiro é a base e o segundo a potência, depois faça essa operação e retorne o resultado, por exemplo: 3,2=9
function potency (base,pow) {
//podemos realizar potência devido a uma atualizaç~ao do JS de 2016 desse jeito
        return base ** pow;
/*     return Math.pow(base,pow);
 */}
console.log(potency(10,3));
console.log(potency(40,5));
console.log(potency(60,6));
