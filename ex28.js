//Crie um objeto que simula um endereço de um cliente
// Propriedades: Rua, bairro, cidade e estado
// no constructor o endereço já deve ser definido por completo
// Crie métodos para atualizar todas as propriedades

class Endereco {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    atualizarRua(novaRua) {
        this.rua = novaRua
    }

    atualizarBairro(novoBairro) {
        this.bairro = novoBairro
    }

    atualizarCidade(novaCidade) {
        this.cidade = novaCidade
    }

    atualizarEstado(novoEstado) {
        this.estado = novoEstado
    }
}

let novoEndereco = new Endereco("Rua Santa luzia, 43", "Luziápolis", "Campo Alegre", "Alagoas")

console.log(novoEndereco)

novoEndereco.atualizarRua("Joana Darc, 51")
novoEndereco.atualizarBairro("Santa Luzia")
novoEndereco.atualizarCidade("Chã da imbira")
novoEndereco.atualizarEstado("Pernambuco")

console.log(novoEndereco)