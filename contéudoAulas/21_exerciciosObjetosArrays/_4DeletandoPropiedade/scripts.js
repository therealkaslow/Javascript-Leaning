//crie um objeto onibus, com as propiedades todas = 8;
//limite de passageiros = 40;
//portas, = 2;
const onibus = {
    rodas: 8,
    portas: 2,
    limitePassageiros: 40
}
console.log(onibus);

//acessando as propiedades do objeto e imprimindo no console
console.log(onibus.limitePassageiros);
console.log(onibus.portas);
console.log(onibus.rodas);

//agora vamos deletar a propiedade rodas e adicionar janelas
delete onibus.rodas;

console.log(onibus);

//adicionando a propiedade janelas
onibus.janelas = 20;

console.log(onibus.janelas);
console.log(onibus);
