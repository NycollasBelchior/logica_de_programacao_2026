import leia from "readline-sync";

let horas = leia.questionInt("digite o número de horas")

console.log("a conversão de horas para minutos é de: " + horas * 60)
console.log ("a conversão de horas para segundos é de : " + horas * 3600)
