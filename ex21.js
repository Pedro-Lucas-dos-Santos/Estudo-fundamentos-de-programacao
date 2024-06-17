// 21 - Faça um algoritmo que leia o ano em que uma pessoa nasceu, imprima na tela quantos anos, meses e dias essa pessoa ja viveu. Leve em consideração o ano com 365 dias e o mês com 30 dias.

function calcularIdade() {
    let anoNascimento = parseInt(prompt("Digite o ano em que você nasceu"));

    if (isNaN(anoNascimento) || anoNascimento > new Date().getFullYear()) {
        alert("Por favor, insira um ano válido.");
        return;
    }

    let anoAtual = new Date().getFullYear();
    let mesAtual = new Date().getMonth() + 1;
    let diaAtual = new Date().getDate();

    let anosVividos = anoAtual - anoNascimento;
    let mesesVividos = anosVividos * 12 + mesAtual;
    let diasVividos = anosVividos * 365 + (mesAtual - 1) * 30 + diaAtual;

    let anos = Math.floor(diasVividos / 365);
    diasVividos %= 365;
    let meses = Math.floor(diasVividos / 30);
    diasVividos %= 30;
    let dias = diasVividos;

    alert(`Você viveu ${anos} anos, ${meses} meses e ${dias} dias.`);
}

calcularIdade();
