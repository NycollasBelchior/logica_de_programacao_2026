import leia from "readline-sync";

let corrida1= leia.questionFloat("digite o valor da primeira corrida: ")
let corrida2= leia.questionFloat("digite o valor da primeira corrida: ")
let corrida3= leia.questionFloat("digite o valor da primeira corrida: ")
let corrida4= leia.questionFloat("digite o valor da primeira corrida: ")
let corrida5= leia.questionFloat("digite o valor da primeira corrida: ")

let desconto = (corrida1 + corrida2 + corrida3 + corrida4 + corrida5) * 0.25
let valorDasCorridas = (corrida1 + corrida2 + corrida3 + corrida4 + corrida5) - desconto

console.log("o valor total do dia é: "+ valorDasCorridas.toFixed(2))
