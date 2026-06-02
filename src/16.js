import leia from "readline-sync";

let produto = leia.questionFloat("digite o valor do protuto:  ")
if (produto <= 100) {
  produto = produto * 0.95

}
else {
  produto = produto * 0.90
}

console.log("O valor do produto é: " + produto.toFixed(2));
