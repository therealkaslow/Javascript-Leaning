//um objeto fallback de outro objeto
//quando um objeto recebe uma requisição de uma propiedade que não tem ela é procura no prototype desse objeto
//o prototype de um objeto criado do zero é o Object, que tem os métodos natívos da linguagem
const pessoa = {
    maos: 2
}

console.log(Object.getPrototypeOf(pessoa)); // aqui mostra quem é o prototype de pessoa que é o object
console.log(Object.getPrototypeOf(pessoa) === Object.prototype); // aqui faz uma comparação com o object prototype que retorna um booleano ou não
console.log(pessoa.hasOwnProperty('maos')); // esse hasOwnproperty é um metodo que consegue extrair uma propiedade de um objeto para o outro
//ou seja sempre o prototype será o pai do objeto que vai ser apssado no parâmetro, no caso o pai é o objeto que está acima, que é o Object


