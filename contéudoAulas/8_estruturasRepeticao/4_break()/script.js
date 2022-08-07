//aqui abaixo vemos que a palavra "break" serve para parar uma estrutura de repeticão antes do previsto.
let nome = "lucas";
for (let i = 0; i < 10; i = i + 1) {

    if (i == 3) {
    nome = "anderson";
    }
    if(i == 5 && nome == "anderson"){
        console.log("O nome é Anderson, pode parar");
        break;
    }
    console.log(i);
}