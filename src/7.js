import leia from "readline-sync";

let produto = leia.questionFloat("digite o valor do seu produto:  ")
let lucro = produto * 0.45
let valorDeVenda = produto + lucro

if (valorDeVenda <= 20) {
    lucro = produto * 0.30
}
console.log("o valor de venda do produto é: " + valorDeVenda.toFixed(2))