// abaixo eu irei aumentar a complexidade do código com funções e criando estruturas mais complexas de comparação.
function multiplicarTresNumeros(x, y, z) {
    return x * y * z;
}
console.log(multiplicarTresNumeros(50, 30, 150));

//podemos criar uma variável mesmo com a função já declarada anteriormente
const mult = multiplicarTresNumeros(5, 4, 8);

console.log("O valor de mult é: " + mult);

//abaixo temos uma estrutura condicional de comparaç~ao com "if else"
function podeDirigir(idade, cnh) {
    function outraVez(numero) {
        return numero;
    }
    if (idade >= 18 && cnh == true) {
        console.log("pode dirigir");
    } else {
        console.log("não pode dirigir");
    }
    outraVez(100250);
}
podeDirigir(22, false);
podeDirigir(18, 1);
podeDirigir(15, 1);
