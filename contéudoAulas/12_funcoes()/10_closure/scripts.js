//Uma função que se lembra do ambiente em que ela foi criada.
function armazenarSoma(x) {
     return y => x + y;
}

let soma1 = armazenarSoma(3);
console.log(soma1(5)); // 8
let soma2 = armazenarSoma(5);
console.log(soma2(10)); // 15

function lembrarSoma(x) {
    return function(y) {
        return x + y;
    }
}
let soma3 = lembrarSoma(2);

console.log(soma3(5));

//abaixo veremos como criar um contador com "closure"

function contador(i){
    let cont = i;
    let somarContador = function(){
        console.log(cont);
        cont++;
    }
    return somarContador;
}
let meuContador = contador(5);
meuContador();
meuContador();
