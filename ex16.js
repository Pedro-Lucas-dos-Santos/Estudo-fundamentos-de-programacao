// 16 - Faça um algoritmo que calcule o IMC (Índice de Massa Corporal) de uma pessoa, leia o seu peso e sua altura e imprima na tela sua condição.

function calcularIMC() {
    let peso = parseFloat(prompt("Digite o seu peso atual"))
    let altura = parseFloat(prompt("Digite a sua altura"))

    let imc = peso / (altura * altura)
    let condicao

    if(imc < 18.5) {
        condicao = "Abaixo do peso"
    } else if(imc >= 18.6 && imc <= 24.9) {
        condicao = "Peso ideal (parabéns)"
    } else if(imc >= 25.0 && imc <= 29.9 ) {
        condicao = "Levemente acima do peso"
    } else if(imc >= 30.0 && imc <= 34.9) {
        condicao = "Obesidade grau I"
    }  else if (imc >= 35.0 && imc <= 39.9) {
    condicao = "Obesidade grau II (severa)"
    } else {
        condicao = "Obesidade grau III (mórbida)"
    }

    alert(`seu IMC é ${imc.toFixed(2)}. Condição: ${condicao}`)

}

calcularIMC()