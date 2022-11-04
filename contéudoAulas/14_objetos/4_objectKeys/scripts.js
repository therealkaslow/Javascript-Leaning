 //um objeto possui chaves que é uma nomenclatura como no exemplo abaixo:
 let pessoa = {
    //aqui embaixo as chaves são: idade, nome, peso.
    //e os valores são o que é representado após os ':'.
    idade: 15,
    peso: 80,
    nome: 'lucas',
 }
 //e também podemos verificar quais as chaves que cada objeto possui:
 let carro = {
    'rodas': 4,
    'cor': "preto",
 }

console.log(carro);
//se executarmos o script desse jeito, irá retornar somento um log
//onde não é manipulável essa informação, o recomendado é gerar um array
//onde é mais didático e prático 

//agora no exemplo abaixo conseguiremos utilizar como um array para manipulação dos dados
console.log(Object.keys(carro));