import leia from "readline-sync";

var idade = leia.questionInt("digite sua idade: ")
var dias = idade * 365
var meses = dias / 30
var anos = dias / 365
console.log ("você tem " + dias + " dias de vida").toFixed(2)
console.log ("você tem " + meses + " meses de vida").toFixed(2)
console.log ("você tem " + anos + " anos de vida").toFixed(2)