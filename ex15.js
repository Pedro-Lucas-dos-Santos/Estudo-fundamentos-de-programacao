// 15 - Faça um algoritmo que leia um valor qualquer e imprima na tela com um reajuste de 5%.

function valorReajuste() {
    let valor = parseInt(prompt("Digite um valor qualquer para sofrer reajuste de 5%"))

    if(isNaN(valor)) {
        alert("Por favor, insira um número válido.")
    }

    let reajuste = valor * 0.05
    let valorReajustado = valor + reajuste;

    alert(`o valor com reajuste de 5% fica ${valorReajustado}`)

}

valorReajuste()