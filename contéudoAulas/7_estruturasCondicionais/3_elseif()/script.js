// else if é uma condicional para a lógica "se nao se" é basicamente um if refinado dentro do algoritmo.
let nome = "lucas";
let idade = 22;

if (nome != undefined && nome == "lucas") {
    console.log("nome está definido");
} else if (nome == "lucas" && nome.length > 4) {
    console.log("olá lucas !");
}