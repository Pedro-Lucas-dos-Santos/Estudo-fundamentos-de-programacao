//Crie uma classe conta bancaria
// Com as propriedades de saldo na conta corrente, saldo na conta poupança e juros da poupança
//Crie metodos de deposito e também um metodo para transferir dinheiro da poupança pra conta corrente
// além disso crie uma conta especial que herda da conta normal
// na conta especial os juros são dobrados da conta normal

class contaBancaria {
    constructor(saldoCorrente, saldoPoupanca, jurosPoupanca) {
        this.saldoCorrente = saldoCorrente;
        this.saldoPoupanca = saldoPoupanca;
        this.jurosPoupanca = jurosPoupanca;
    }

    depositarContaCorrente(valor) {
        this.saldoCorrente += valor
    }

    depositarPoupanca(valor) {
        this.saldoPoupanca += valor
    }

    transferirParaCorrente(valor) {
        if (valor > 0 && this.saldoPoupanca >= valor) {
            this.saldoPoupanca -= valor
            this.saldoCorrente += valor
            console.log(`Transferência de R$${valor} da poupança para conta corrente`)
        } else {
            console.log(`Saldo insuficiente`)
        }
    }

    aplicarJuros() {
        let juros = this.saldoPoupanca * this.jurosPoupanca;
        this.saldoPoupanca += juros
    }

    exibirSaldos() {
        console.log(`Conta Corrente: R$${this.saldoCorrente.toFixed(2)}`);
        console.log(`Conta Poupança: R$${this.saldoPoupanca.toFixed(2)}`);
    }
}

class contaEspecial extends contaBancaria {
    constructor(saldoCorrente, saldoPoupanca, jurosPoupanca) {
        super(saldoCorrente, saldoPoupanca, jurosPoupanca * 2)
    }
}

const minhaConta = new contaBancaria(1000, 5000, 0.01);

minhaConta.depositarContaCorrente(500);
minhaConta.depositarPoupanca(1000);
minhaConta.transferirParaCorrente(2000);
minhaConta.aplicarJuros();
minhaConta.exibirSaldos();

const minhaContaEspecial = new contaEspecial(2000, 10000, 0.01); // Juros de 2% (dobrado)

// Testando operações na conta especial
minhaContaEspecial.depositarContaCorrente(1000);
minhaContaEspecial.depositarPoupanca(500);
minhaContaEspecial.transferirParaCorrente(3000);
minhaContaEspecial.aplicarJuros();
minhaContaEspecial.exibirSaldos();