import leia from "readline-sync";

let metros = leia.questionFloat("digite um valor em metros:  ")

console.log("o valor em centímetros é " + metros * 100)
console.log ("o valor em milímetros é " + metros * 1000)
