// 14 - Faça um algoritmo que receba um número inteiro e imprima na tela o seu antecessor e o seu sucessor.

function antecessorSucessor() {
    let numero = parseInt(prompt("Digite um número"))

    if(isNaN(numero)) {
        console.log("Por favor, insira um número válido.")
    }

    let antecessor = numero -1
    let sucessor = numero +1

    alert(`o antecessor de ${numero} é ${antecessor} e o sucessor é ${sucessor}`)
}

antecessorSucessor()