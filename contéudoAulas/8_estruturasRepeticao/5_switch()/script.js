//abaixo temos uma estrutura de controle que é o "switch" que é uma tomada de decisão que pela lógica funciona como casos diferentes.
let nome = "lucas";
switch(nome) {
    case "matheus":
        console.log("o nome não é lucas");
        break;
    case "anderson":
        console.log("o nome não é anderson");
        break;
    default:
        console.log("o nome não foi encontrado"); 
}
// acima o caso de switch é pouco utilizado por ser muito baguncado e dificil de ler e dar manutenčão no código, é recomendado utilizar "ifs"