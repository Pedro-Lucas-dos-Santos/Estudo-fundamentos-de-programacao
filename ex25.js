// Implemente a lógica do FizzBuzz:

// Para números divisíveis por 3, exiba "Fizz".
// Para números divisíveis por 5, exiba "Buzz".
// Para números divisíveis por ambos, exiba "FizzBuzz".
// Caso contrário, exiba o número.

function fizzBuzz(n) {
    if( n % 3 === 0 && n % 5 === 0) {
        console.log("fizzBuzz")
    } else if (n % 3 === 0) {
        console.log("Fizz")
    } else if (n % 5 === 0) {
        console.log("Buzz")
    } else {
        console(n)
    }
}

fizzBuzz(3)