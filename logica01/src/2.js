import leia from "readline-sync";
let altura = leia.questionFloat("digite a altura de um triangulo")
let largura = leia.questionFloat("digite a largura de um triangulo")

let area = (altura * largura)/ 2
console.log ("a area do triangulo é " + area)