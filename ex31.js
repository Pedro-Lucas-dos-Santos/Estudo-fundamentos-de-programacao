class Inimigo {
    constructor(nome, vivo) {
        this.nome = nome;
        this.vivo = vivo
    }

    atirarShuriken() {
       return this.vivo = false
    }
}

let inimigo = new Inimigo("Madara", true)

console.log(inimigo)

console.log(inimigo.atirarShuriken())

console.log(inimigo)