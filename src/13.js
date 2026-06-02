import leia from "readline-sync";

let produto = leia.questionFloat("digite o valor do protuto:  ")
let desconto = produto * 0.10

console.log("o do desconto é de: " + desconto.toFixed(2))
console.log("o valor do produto com desconto é: " + (produto - desconto).toFixed(2))
