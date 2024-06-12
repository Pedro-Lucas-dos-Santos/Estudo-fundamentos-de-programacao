function quantidadeSalarioMinimo() {
    let salarioMinimo = 1293.20; // Corrigido o valor do salário mínimo
    let salarioUsuario = parseFloat(prompt("Digite o seu salário"));

    if (isNaN(salarioUsuario) || salarioUsuario <= 0) {
        console.log("Por favor, insira um valor válido para o salário.");
        return;
    }

    let calcularSalarioMinimo = salarioUsuario / salarioMinimo;

    console.log(`Você ganha ${calcularSalarioMinimo.toFixed(2)} salários mínimos.`);
}

quantidadeSalarioMinimo();