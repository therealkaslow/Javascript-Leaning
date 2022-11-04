/*uma array tem a possibilidade de adicionar um conjunto de valores a uma variavel
O array deve ser escrito entre colchetes, separando os valores por vígulas, veja:*/ 

let arr = [1,2,3,4];
let nomes = ['lucas', 'mateus', 'joao'];
let booleano = [true, false,true, false];
let misturado = ['lucas', 15, true];

console.log(arr);
console.log(misturado);
console.log(booleano);

/*podemos acessar um array pelo seu índice, por exemplo: arr[1]*/
console.log(booleano[2]);
/*lembrande que o primeiro índice sempre é o "0", ou seja, para a cessar o primeiro elemento do array: booleano[0]*/

/*para acessar um último elemnto do array sem precisar saber o índice*/
console.log(booleano[length -1]) /*o "-1" porque um array começa pelo valor 0*/ 