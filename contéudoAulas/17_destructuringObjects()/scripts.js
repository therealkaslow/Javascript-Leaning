//destructuring com objetos
//podemos definir variáveis com propiedades do objetos com uma notação
//diferente, chamada destructuring, que cria variáveis apartir do objeto

const pessoa = {
    altura: 1.73, // nesse escopo define os parâmetros
    peso: 59.0,
    nome: "lucas"

}

const {altura: lucasAltura, peso: lucasPeso, nome: lucasNome} = pessoa //e nesse escopo
console.log(lucasNome);
console.log(lucasPeso);
console.log(lucasAltura);
//ou seja o destructuring é desestruturar todo o objeto em variável