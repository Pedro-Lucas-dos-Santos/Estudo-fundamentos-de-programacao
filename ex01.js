// alert('A seguir, faremos a adição entre dois números de sua escolha')

let primeiroNumeroAdicao = document.getElementById('n1_adicao');
let segundoNumeroAdicao = document.getElementById('n2_adicao');
let resultadoSoma = document.getElementById('resultado_soma');
let formulario = document.getElementById('formulario');

function adicao(event) {
    event.preventDefault();

    let valorN1 = parseFloat(primeiroNumeroAdicao.value);
    let valorN2 = parseFloat(segundoNumeroAdicao.value);

    let messageErrorN1 = document.getElementById('message_error_n1');
    let messageErrorN2 = document.getElementById('message_error_n2');

    if (isNaN(valorN1)) {
        messageErrorN1.style.display = 'block';
    } else {
        messageErrorN1.style.display = 'none';
    }

    if (isNaN(valorN2)) {
        messageErrorN2.style.display = 'block';
    } else {
        messageErrorN2.style.display = 'none';
    }

    if (!isNaN(valorN1) && !isNaN(valorN2)) {
        let resultado = valorN1 + valorN2;
        resultadoSoma.textContent = `A soma é: ${resultado}`;
    }
}

let botaoSoma = document.getElementById('botao_soma');
botaoSoma.addEventListener('click', adicao);


// while (isNaN(primeiroNumeroAdicao = parseInt(prompt('Digite o primeiro número da adição')))) {
//     alert('O valor que você digitou não é um número')
// }

// while (isNaN(segundoNumeroAdicao = parseInt(prompt('Digite o segundo número da adição')))) {
//     alert('O valor que você digitou não é um número')
// }

// let SomaDosNumeros = primeiroNumeroAdicao + segundoNumeroAdicao

// alert('A soma dos dois valores é:' + SomaDosNumeros)

