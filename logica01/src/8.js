import leia from "readline-sync";

let number = leia.questionInt("digite um numero:   ")

console.log("o dobro do número escolhido é : " + (number * 2).toFixed(2))
console.log("o dobro do número escolhido é : " + (number * 3).toFixed(2))
