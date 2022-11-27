//crie um array com 5 nomes
//verifique se o seu nome existe no array
//se existir imprima alguma mensagem no console.

//declaração de array e propiedades
let nomes = ["lucas", "joao", "everton", "victor", "james"];

//pra verificar se o nome existe usando o método includes()
if (nomes.includes("lucas")) {
    console.log("o nome lucas existe!");
} else {
    console.log("nome inexistente");
};
for(let i = 0; i < nomes.length; i++){
    do {
        nomes.length--;
        console.log(nomes);
    } while(nomes.length > [0]);
}