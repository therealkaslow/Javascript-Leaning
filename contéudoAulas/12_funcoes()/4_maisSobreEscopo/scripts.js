//atualmente com "let e const", qualquer bloco de código pode separar seu escopo (um if por exemplo);
//isso é muito bom pois separa os contextos, com "var" isso não acontecia
//ou seja, podemos ter escopos diferentes não só com funções
let valor = 10;
if (valor > 5){
    let valor = 20;
    valor++;
    console.log(valor);
}
console.log(valor);
