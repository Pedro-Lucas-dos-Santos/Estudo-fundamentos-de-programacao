function calcularTemperatura() {
    let grausFahrenheit = parseFloat(prompt("Digite uma temperatura em Fahrenheit"));

    if (isNaN(grausFahrenheit)) {
        alert("Por favor, insira uma temperatura válida.");
        return;
    }

    let grausCelsius = (5 * (grausFahrenheit - 32)) / 9;

    alert(`A temperatura em Fahrenheit: ${grausFahrenheit}°F\nA temperatura correspondente em Celsius: ${grausCelsius.toFixed(2)}°C`);
}

calcularTemperatura();
