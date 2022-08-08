// abaixo começaremos a declarar funcoes no javascript
function consoleLogger() {
    console.log("hello world");
}
consoleLogger();

//declaração de funções com parâmetros
function numberShow(number) {
    console.log("Agora o numero é " + number);
}
numberShow(10);
numberShow(100);

//agora teremos funções anônimas ja declarando variáveis
const randomNumber = function () {
    console.log("The random number is: " + Math.random());
}
randomNumber();
randomNumber();
randomNumber();
