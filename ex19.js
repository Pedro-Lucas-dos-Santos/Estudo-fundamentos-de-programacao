// 19 - Faça um algoritmo que leia três valores inteiros diferentes e imprima na tela os valores em ordem decrescente.

function readValues() {
    let value1 = parseInt(prompt("Insira o primeiro número"));
    let value2 = parseInt(prompt("Insira o segundo número"));
    let value3 = parseInt(prompt("Insira o terceiro número"));

    if (isNaN(value1) || isNaN(value2) || isNaN(value3)) {
        alert("Insira um número válido.");
        return;
    }

    let values = [value1, value2, value3];
    values.sort(function(a, b) { return b - a });

    alert(`Os valores em ordem decrescente são: ${values[0]}, ${values[1]}, ${values[2]}`);
}

readValues();