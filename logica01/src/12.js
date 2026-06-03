import leia from "readline-sync";

let salarioInicial = leia.questionFloat("digite o valor do seu salário:  ")

salarioInicial *= 1.15

console.log ("o valor do seu salário com aumento é: " + salarioInicial.toFixed(2))