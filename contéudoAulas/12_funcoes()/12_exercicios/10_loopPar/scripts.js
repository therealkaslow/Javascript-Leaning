//escreva uma função que recebe um número, e o decrementa de 1 com um loop, além disso imprima somente os números pares no console.
function loopPar (num){
        for(let i = num; i >= 0; i--){
                if(i % 2 ==0){
                        console.log(`o número ${i} é par`);
                } else {
                        console.log(`o número ${i} é impar`);
                }
        }
}
console.log(loopPar(11));
console.log(loopPar(60));
