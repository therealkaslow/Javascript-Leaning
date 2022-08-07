//escreva um loop for ou while que exiba qual número é par e qual numero é impar
/* for (let i = 1; i <= 50; i++) {
    console.log("o numero " + i + " é impar")
    i = i + 1;
    console.log("o numero " + i + " é par");
} */
/* let numero = 1;
while (numero <= 50) {
    console.log("o numero " + numero + " é impar");
    numero++;
    console.log("o numero " + numero + " é par");
    numero++;
} */
for (let number = 0; number <= 50; number++) {

    if (number % 2 == 0) {
        console.log(`o número ${number} é par`);
    } else {
        console.log(`o número ${number} é impar`);
    }
}