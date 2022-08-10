//Argumentos Opcionais
//podemos chamar uma função em JS sem o número igual de parâmetros determinados como no exemplo abaixo:
function soma(a, b) {
    if (a === undefined || b === undefined) {
        console.log("esta função precisa ter dois argumentos!");
    } else {
        return a + b;
    }
}
console.log(soma(1));

console.log(soma(1, 2));

//um outroexemplo mais simples de argumento opcional com arrow function

const saudacao = (nome, idade) => {
    if (nome === undefined) {
        console.log("olá");
    } if (idade === undefined) {
        console.log("olá ");
    } else {
        console.log("olá " + nome + "você tem " + idade + " anos");
    }
}
saudacao("matheus");
saudacao(18);
saudacao("Lucas", 22);