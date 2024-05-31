// 13 - Faça um algoritmo que leia os valores de A, B, C e em seguida imprima na tela a soma entre A e B é mostre se a soma é menor que C.

function verifyNumbers() {
    let A = parseInt(prompt("Digite um numero"))
    let B = parseInt(prompt("Digite um numero"))
    let C = parseInt(prompt("Digite um numero"))
    let soma = A + B
    if(A + B < C) {
        alert("A soma de A e B é menor que C ")
    } else {
        alert('A soma de A e B é maior que C ')
    }
}

verifyNumbers()