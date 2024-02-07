//07 - Faça um programa que recebe o valor de um deposito e o valor de taxa de juros, calcule e mostre o valor do rendimento e o valor total depois do rendimento.

let deposito = parseFloat(prompt('Digite o valor do seu depósito'));
let taxa = parseFloat(prompt('Digite a taxa de juros'));

let renda = deposito * (taxa / 100);
let total = deposito + renda;

alert('A sua renda é: ' + renda.toFixed(2) + ' e o valor total depois do rendimento é: ' + total.toFixed(2));
