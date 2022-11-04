//Objetos são uma coleção de propiedades, parecidos com arrays
//podemos acessar estas propiedades 
let pcGaymer = {
    cpu: "gabinete",
    core: "ryzen 3 2200G",
    monitor: "TV",
    //abaixo temos como criar uma function que age como um método
    ligar: function(){
        console.log("BIOS Settings: " + this.core);
    }
}
console.log(pcGaymer.monitor.length);
console.log(pcGaymer.monitor);
console.log(pcGaymer.cpu);
pcGaymer.ligar();
// [] = array
// 