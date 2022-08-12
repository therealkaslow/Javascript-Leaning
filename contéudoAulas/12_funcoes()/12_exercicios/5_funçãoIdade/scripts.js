//escreva uma função que recebe a idade de uma pessoa, Se ela tem mais de 18 anos ela pode entrar na auto-escola, imprima uma mensagem informando isso.
//se ela te menos, ela não pode, imprima outra mensagem com este aviso, e execute a função nesses dois casos
function verificarIdade(idade) {
    if (idade >= 18) {
        console.log("você pode entrar.")
    } else {
        console.log("você não pode entrar.")
    }
}
verificarIdade(18);