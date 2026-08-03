const pessoa = {
    nome: "Daniel",
    idade: 25,
    ativo: true
};

for (const chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}