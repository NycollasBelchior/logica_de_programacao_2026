import leia from "readline-sync";

let Consumo = leia.questionFloat("digite o consumo medio do carro:  ");
let distancia = leia.questionFloat("digite sua distância a ser percorrida em km:  ");

let consumoMedio= distancia / Consumo

console.log("o consumo do seu carro em litros é de:" + consumoMedio.toFixed(2) + " litros")