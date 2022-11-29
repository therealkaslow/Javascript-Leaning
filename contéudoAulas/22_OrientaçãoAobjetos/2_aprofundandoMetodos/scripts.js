//métodos são propiedades que servem como funções
//ou seja, as ações dos objetos
//invocamos os métodos da mesma maneira que funções
let pessoa = {
    andar: function(){
        return console.log("andando");
    }
}
console.log(pessoa.andar());