//podemos copiar todas as propiedades de um obj para outro

let GolQuadrado = {
    cor: 'vermelho',
    motor: '1.8 AP',
}
let adicionais = {
    porta_malas: '18 litros',
    placa_mercosul: true,
}
console.log(GolQuadrado);

Object.assign(GolQuadrado, adicionais);
// esse método assign consegue copiar as propiedades de um objeto para o principal
console.log(GolQuadrado);