import leia from "readline-sync";

let numTotal = leia.questionInt("digite o total de eleitores de um municipio: ")
let numVotosBrancos = leia.questionInt("digite o numero de votos brancos: ")
let numVotosNulos= leia.questionInt("digite o numero de votos nulos: " )
let numVotosValidos = leia.questionInt("digite o numero de votos validos: ")

console.log("o percentual de votos brancos é " + (numVotosBrancos / numTotal) * 100 + "%")
console.log ("o percentual de votos nulos é " + (numVotosNulos / numTotal) * 100 + "%")
console.log("o percentual de votos validos é " + (numVotosValidos / numTotal) * 100 + "%")
