import leia from "readline-sync";

let n1 = leia.questionFloat("digite a primeira nota do aluno:  ")
let n2 = leia.questionFloat("digite a segunda nota do aluno:  ")
let n3 = leia.questionFloat("digite a terceira nota do aluno:  ")

let media = (n1 + n2 + n3) / 3

console.log("a média do aluno é: " + media.toFixed(2))

if (media < 6){
    console.log("o aluno está reprovado")

}else console.log("o aluno está aprovado")
