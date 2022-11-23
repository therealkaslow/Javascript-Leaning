//rest Operator
//uma forma de uma função receber indefinidos parâmetros
//o operador rest vai virar um array
//o parâmetro é definido por um nome
 let num = 1;
 let num1 = 2;

 function imprimirNumeros( ...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
 }

 imprimirNumeros(num,num1);
 console.log('pausa');
 imprimirNumeros(1,10,35);
 //o operador rest consegue condesar varios elementos em um array e usar como quiser no futuro
 