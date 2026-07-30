function calcular(n1, n2, op) {
    return op(n1, n2)
}

function soma(n1, n2) {
    return n1 + n2
}

function divisao(num1, num2) {
    return num1 / num2
}

const resultadoSoma = calcular(2, 8, soma)
console.log(resultadoSoma);

const resultadoDivisao = calcular(10, 2, divisao)
console.log(resultadoDivisao);
