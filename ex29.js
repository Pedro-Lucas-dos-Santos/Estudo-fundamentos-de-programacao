//Crie uma classe que simule um carro
// Propriedades: Marca, cor, gasolina restante
// Crie um método de dirigir o carro, que vá diminuindo a gasolina gradativamente
// E um de abastacer para aumentar a gasolina quando necessário

class Carro {
    constructor(marca, cor, gasolinaRestante, consumo) {
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
        this.consumo = consumo;
    }

    dirigirCarro(km) {
        let litrosConsumidos = km / this.consumo

        let litrosConsumidosFixed = litrosConsumidos.toFixed(0)

        this.gasolinaRestante -= litrosConsumidosFixed
    }

    abastecer(litros) {
        this.gasolinaRestante += litros;
    }
}

let carro = new Carro("Hyundai", "Vermelho", 100, 14)

console.log(carro)

carro.dirigirCarro(100)

console.log(carro)

carro.abastecer(10)

console.log(carro)