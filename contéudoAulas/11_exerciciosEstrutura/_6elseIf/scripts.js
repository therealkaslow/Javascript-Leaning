//faca uma estrutura if/else para verificar se um usuário pode dirigir e armazene em variáveis alguma informacões sobre o usuário: idade e se tem CNH.
// se a idade for maior que 18 e não possuir CNH,exiba uma mensagem
// se a idade for maior que 18 e tem CNH, exiba uma mensagem, e se não tiver 18 nem CNH, exiba outra mensagem.
let nome = "lucas";
let idade = 17;
let cnh = false;

if (idade >= 18 && cnh == false) {
    console.log("lamento " + nome + " voce tem 18 mas ainda não tem CNH para dirigir!");
} else if (idade >= 18 && cnh == true) {
    console.log(nome + " voce pode dirigir!");
} else if (idade < 18 && cnh == false) {
    console.log("voce precisar ser maior de idade e possuir uma CNH!");
} else {
    console.log("voce tem CNH mas ainda não tem idade o suficiente!")
}