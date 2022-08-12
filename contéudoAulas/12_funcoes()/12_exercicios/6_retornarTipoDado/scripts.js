//escreva uma função que detecta o tipo de dado passado, verificar se é um, "number, boolean ou string" e retorne uma mensagem para cada tipo, execute uma função para cada caso.

function typeOfdata(type) {
    if (typeof type === "string") {
        console.log(`o tipo de dado é string`);
    } else if (typeof type === "number") {
        console.log("o tipo de dado é number");
    } else {
        console.log("o tipo de dado é boolean");
    }
}
typeOfdata("adad");
typeOfdata(20);
typeOfdata(true)