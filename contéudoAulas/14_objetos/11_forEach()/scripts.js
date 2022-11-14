//metodos de array: forEach
//o forEach consegue adicionar mais elementos em uma única array
//como se fosse um loop for()

const nomes = ["lucas", "matheus", "adriano", "anderson"];

nomes.forEach(num => {
    console.log("seja bem vindo " + num);
    //esse num é um parametro que existe somente dentro do escopo do forEach

});
//o metodo foreach itera cada elemento em um índice do array