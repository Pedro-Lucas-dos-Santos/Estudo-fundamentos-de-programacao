//Crie uma classe que simula um carrinho de compras que tenha propriedade itens, quantidade e valor total e os metodos para adicionar e remover itens

class CarrinhoDeCompras {
    constructor() {
        this.itens = []
        this.quantidadeTotal = 0
        this.valorTotal = 0
    }

    adicionarItem(nome, quantidade, preco) {
        const itemExistente = this.itens.find(item => item.nome === nome) // verifca se o item existe no carrinho

        if(itemExistente) {
            itemExistente.quantidade += quantidade; // se existir altera apenas a quantidade e valor
        } else {
            this.itens.push({nome, quantidade, preco}) // se não existe adiciona
        }

        //atualiza a quantidade e o valor total
        this.quantidadeTotal += quantidade;
        this.valorTotal += preco * quantidade
    }

    removerItem(nome, quantidade) {
        const itemIndex = this.itens.findIndex(item => item.nome === nome) // verifica se o item existe no carrinho

        if(itemIndex > -1) {
            const item = this.itens[itemIndex];

            if(quantidade < item.quantidade) { // se a quantidade a ser removida for menor que a quantidade existente reduzirá a quantidade e atualizará os valores
                item.quantidade -= quantidade;
                this.quantidadeTotal -= quantidade;
                this.valorTotal -= item.preco * quantidade;
            } else { // caso a quantidade a ser removida for igual ou maior quer a existente, removerá o item por completo
                this.quantidadeTotal -= item.quantidade; 
                this.valorTotal -= item.preco * item.quantidade;
                this.itens.splice(itemIndex, 1)
            }
        } else {
            console.log("Item não encontrado no carrinho")
        }
    }

    exibirResumo() {
        console.log("Itens no carrinho:");
        this.itens.forEach(item => {
            console.log(`${item.nome}: ${item.quantidade} unidades - R$${item.preco.toFixed(2)} cada`)
        })

        console.log(`Quantidade total: ${this.quantidadeTotal}`);
        console.log(`Valor total: R$${this.valorTotal.toFixed(2)}`);
    }
}

const carrinho = new CarrinhoDeCompras()

carrinho.adicionarItem("Chapinha", 1, 125)
carrinho.adicionarItem("MousePad", 2, 100)

carrinho.exibirResumo()