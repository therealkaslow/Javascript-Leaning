//o escopo de uma função serve para separar do escopo global como no exemplo abaixo:
function valorDeI() {
    const i = 100
    console.log("o valor de i dentro do escopo dessa função é: " + i);
}
let i = 200;
console.log(valorDeI());
console.log(i);