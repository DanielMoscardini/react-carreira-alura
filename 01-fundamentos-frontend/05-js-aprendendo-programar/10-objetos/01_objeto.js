const pessoa = {
    nome: "Daniel",
    idade: 25,
    ativo: true
};

console.log(pessoa.nome);      // Daniel
console.log(pessoa["idade"]);  // 25

pessoa.cidade = "Franca";
pessoa["profissao"] = "Dev";
pessoa.idade = 26;
delete pessoa.ativo;


console.log(pessoa)