// 17 - Faça um algoritmo que leia três notas obtidas por um aluno, e imprima na tela a média das notas.

function calcularMedia() {
    let nota1 = parseInt(prompt("Digite a primeira nota"))
    let nota2 = parseInt(prompt("Digite a segunda nota"))
    let nota3 = parseInt(prompt("Digite a terceira nota"))

    let soma = nota1 + nota2 + nota3
    let resultado = soma / 3

    if(resultado >= 7) {
        alert(`Aprovado! sua média é ${resultado.toFixed(2)}`)
    } else {
        alert(`Reprovado! sua média é ${resultado.toFixed(2)}`)
    }
}

calcularMedia()