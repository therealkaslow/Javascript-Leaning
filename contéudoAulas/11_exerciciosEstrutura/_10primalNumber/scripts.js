//verifique se um número é primo!, um número primo é um numero natural maior que 1 e apenas divisível por si própio e por 1.
// um numero primo é so divisível por dois numeros, que é por um e ele mesmo!
let primalNumber = 41;
let divisoes = 0;

for (let i = 1; i <= primalNumber; i++) {
    if (primalNumber % i == 0) {
        divisoes++
    }

}
if (divisoes == 2) {
    console.log(`o numero ${primalNumber} é primo`);
} else {
    console.log(`o número ${primalNumber} não é primo`);
}