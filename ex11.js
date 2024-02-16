//11 - Crie um programa que recebe o numero de horas trabalhadas e o valor do salário mínimo. Calcule e mostre o salário a receber seguindo as regras abaixo,

// a) - A hora trabalhada vale a metade do salário mínimo
// b) - O salário bruto equivale ao número de horas trabalhadas multiplicado pelo valor da hora trabalhada
// c) - O imposto equivale a 3% do salário bruto
// d) - o salário a receber equivale ao salario bruto menos o imposto

function calcularSalario(horasTrabalhadas, valorSalarioMinimo) {
    const valorHoraTrabalhada = valorSalarioMinimo / 2;

    const salarioBruto = horasTrabalhadas * valorHoraTrabalhada;

    const imposto = 0.03 * salarioBruto;

    const salarioReceber = salarioBruto - imposto;

    return salarioReceber;
}

const horasTrabalhadas = prompt("Informe o número de horas trabalhadas:");
const valorSalarioMinimo = prompt("Informe o valor do salário mínimo:");

const horasTrabalhadasNumero = parseFloat(horasTrabalhadas);
const valorSalarioMinimoNumero = parseFloat(valorSalarioMinimo);

if (!isNaN(horasTrabalhadasNumero) && !isNaN(valorSalarioMinimoNumero)) {
    const salarioFinal = calcularSalario(horasTrabalhadasNumero, valorSalarioMinimoNumero);
   alert(`O salário a receber é: R$ ${salarioFinal.toFixed(2)}`);
} else {
    alert("Por favor, insira valores numéricos válidos.");
}