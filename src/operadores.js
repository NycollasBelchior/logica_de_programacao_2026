import leia from "readline-sync";

//entrada
let grau = leia.questionFloat("Digite um valor em graus: ");

//processamento
let fairenheit = (grau * 1.8) + 32;

//saída
console.log(grau + "°C é igual a " + fairenheit + "°F");

var kelvin = grau + 273.15;

console.log(grau = "°C é igual a " + kelvin + "K");