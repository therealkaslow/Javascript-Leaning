//Podemos Converter o JSON para uma strign de forma fácil
//um também uma string para JSON
const carro = {
    "marca": "BMW",
    "rodas": 4,
    "portas": 2,
    "tipo": "sedan"
}
//abaixo temos uma conversao do JSON para a string e passando o parâmetro o nome do obj
let converterJson = JSON.stringify(carro);

console.log(converterJson);

let jsonParaString = JSON.parse(converterJson);

console.log(jsonParaString);

