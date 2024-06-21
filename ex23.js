// 23 - Faça um algoritmo que calcule a quantidade de litros de combustível gastos em uma viagem, 
//sabendo que o carro faz 12km com um litro. Deve-se fornecer ao usuário o tempo que será gasto na viagem a sua velocidade média, 
//distância percorrida e a quantidade de litros utilizados para fazer a viagem.
//Fórmula: distância = tempo x velocidade.
//litros usados = distância / 12.

function calcularCombustivel() {
    let tempoGasto = parseInt(prompt("Digite o tempo gasto na viagem"))
    let velocidadeMedia = parseInt(prompt("A que velocidade media viajaram?"))

    let distancia = tempoGasto * velocidadeMedia
    let litrosUsados = distancia / 12

    alert(`Litros usados: ${litrosUsados} litros`)
}

calcularCombustivel()