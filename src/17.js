import leia from "readline-sync";

let number = leia.questionInt("digite um numero inteiro: ")

if (number %2 == 0)
{
    console.log("o numero " + number + " é par")
}
else{
    console.log("o numero " + number + " é impar")
}