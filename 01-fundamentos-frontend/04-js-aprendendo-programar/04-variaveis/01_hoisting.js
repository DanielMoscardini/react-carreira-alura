/*
Não utilizar var devido ao hoisting
*/

console.log('Minha idade é: ', idade)
var idade = 25
// Deveria dar erro, mas devido ao hoisting fica como undefined.

