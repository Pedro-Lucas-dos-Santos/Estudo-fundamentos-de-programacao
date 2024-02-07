//06 - Crie um objeto representando uma pessoa com propriedades como nome, idade, cidade e depois Adicione uma nova propriedade ao objeto, por exemplo, "profissão".

let pessoas = [
    {
        nome: "Pedro",
        idade: "22",
        cidade: "Campo Alegre"
    },
    {
        nome: "Lucas",
        idade: "23",
        cidade: "Campo Alegre"
    }
]

pessoas[1].profissao = "Desenvolvedor";

console.log(pessoas)