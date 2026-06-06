import leia from 'readline-sync'

console.log("-----boletim-----");

let nome = leia.question("digite seu nome: ");
let nota1 = leia.questionInt("digite sua primeira nota: ");
let nota2 = leia.questionInt("digite sua segunda nota: ");
let nota3 = leia.questionInt("digite sua terceira nota: ");

let media = (nota1 + nota2 + nota3) / 3;

if (media <= 6){
    console.log("sua nota foi " + media + "você reprovou")
}
else{
    console.log("parabens " + nome + ", sua nota foi " + media +", você passou!!")
}