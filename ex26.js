// Crie uma classe Conta que receba a propriedade saldo e tenha os metodos de deposito e saque

class Conta {
    constructor(saldo) {
        this.saldo = saldo;
    }

    deposito(valor) {
        this.saldo += valor
    }

    saque(sacar) {
        this.saldo -= sacar
    }
}

let novaConta = new Conta(2000)

novaConta.deposito(1000)

console.log("Seu saldo é", novaConta.saldo)

novaConta.saque(2000)

console.log("Seu saldo é", novaConta.saldo)