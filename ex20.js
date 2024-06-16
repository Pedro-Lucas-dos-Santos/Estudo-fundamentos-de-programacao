// 20 - faça um algoritmo que receba um valor A e B, e troque o valor de A por B e o valor de B por A e imprima na tela os valores.

function trocarValores() {
    let A = prompt("Digite algo")
    let B = prompt("Digite algo")

    console.log("A", A)
    console.log("B", B)

    let trocarValorA = B
    let trocarValorB = A

    console.log(`valor de A trocado: ${trocarValorA} e valor de B trocado: ${trocarValorB}`)
}

trocarValores()