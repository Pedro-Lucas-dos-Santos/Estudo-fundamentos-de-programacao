class Caminhao {
    constructor(rodas, portas, reboque) {
        this.rodas = rodas;
        this.portas = portas;
        this.reboque = reboque;
    }
}

let caminhao = new Caminhao(2, 2, true)

console.log(caminhao)

let {rodas, portas, reboque} = caminhao

console.log(rodas, portas, reboque)