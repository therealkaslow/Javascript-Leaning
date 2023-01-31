//crie uma classe que simula uma conta no banco( utilizando a forma que preferir);
//deve conter a propiedade saldo;
//e os métodos deposito e saque
//teste os métodos
class Banco {
    constructor(saldo) {
        this.saldo = saldo;
    }
    depositar(valor) {
        valor = this.saldo =+ valor;
    }

    verSaldo(){
        console.log("o valor disponível para saque é: " + this.saldo);
    }

    sacar(valor) {
        valor = this.saldo -= valor;
    }

}
//sempre temos que instanciar a classe fora do escopo 
let banco = new Banco();
banco.depositar(100);

console.log(banco);

console.log(banco.verSaldo());

banco.sacar(16);

console.log(banco.verSaldo());
