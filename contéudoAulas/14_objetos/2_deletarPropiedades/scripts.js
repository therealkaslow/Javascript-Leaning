//podemos adicionar e deletar propiedades ao longo do nosso programa.

let celular = {
    marca: "samsung",
    preco: 1500.00,
    categoria: "custo benefício",
}
console.log(celular.categoria);

delete celular.categoria;

console.log(celular.categoria);

celular.resistencia = false; // nesse trecho mostra como que é adicionar propiedades

console.log(celular.resistencia);

