import leia from "readline-sync";

let number = leia.questionInt("digite um numero inteiro: ")
let antecessor = number - 1
console.log ("o antecessor de " + number + " é " + antecessor.toFixed(2))