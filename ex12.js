// 12 - Faça um algoritmo que leia dois valores inteiros A e B, se os valores de A e B forem iguais, deverá somar os dois valores, caso contrário devera multiplicar A por B. Ao final de qualquer um dos cálculos deve-se atribuir o resultado a uma variável C e imprimir seu valor na tela.

function verifyNumber() {
    let number1 = parseInt(prompt("Digite um número"))
    let number2 = parseInt(prompt("Digite um número"))
    let soma = number1 + number2
    let multiplicar = number1 * number2

    if(isNaN(number1 && number2)) {
        alert("Por favor, digite um número válido.")
        return 
    }

    if(number1 === number2) {
        alert(soma)
    } else {
        alert(multiplicar)
    }
}

verifyNumber()