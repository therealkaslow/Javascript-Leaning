//metodos de array, 'push' e "pop"
//esses dois metodos servem para adicionar e remover o último elemnto no array
//"push" para adicionar o elemento e "pop" para remover o elemento
let nomes = ["matheus", "lucas", "joao"];

let elementosRemovidos = nomes.pop();

console.log(elementosRemovidos);
console.log(nomes);

// agora iremos adicionar um elemento no índice do array
let adicionarNomes = nomes.push("joao");