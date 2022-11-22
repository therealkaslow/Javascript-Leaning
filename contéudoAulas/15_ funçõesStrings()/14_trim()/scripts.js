//agora temos um método  que trabalha diretamente na string
//o método trim() remove tudo que é string
//ele é utilizado justamente para quando o usuário digitar um nome com espaços
//desnecessários o própio metodo formata o nome corretamente por exemplo:

let nomes = "  l ucas   ";
console.log(nomes);

//agora com o método

let nomeCorrigido = nomes.trim();

console.log(nomeCorrigido);