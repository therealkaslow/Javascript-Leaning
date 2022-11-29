//quando criamos um objeto a partir de um outro, o base será o prototype;
//ele herdará tanto os métodos e propiedades de Object( o prototype do objeto base);
//quando os do objeto base para este novo
const pessoa = {
    maos: 2
}
console.log(Object.getPrototypeOf(pessoa)); // aqui ta perguntando se o prototype de pessoa é o object
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);

console.log(pessoa.hasOwnProperty("maos"));

const pessoaNova = Object.create(pessoa);

console.log(pessoaNova.maos);

console.log(pessoaNova.hasOwnProperty("maos"));

console.log(Object.getPrototypeOf(pessoaNova) === pessoa);