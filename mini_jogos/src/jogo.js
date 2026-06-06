import leia from 'readline-sync'

console.log("----detector de níveis----")

let nome = leia.question("digite seu nome: ")
let nivel = Math.floor(Math.random() * 120)

if (nivel < 10) {
    console.log(nome +" ,você recebeu o nível : " + nivel + " então seu título é : iniciante!")
}
else if (nivel >= 10 && nivel <= 49){
    console.log(nome +" ,você recebeu o nível : "+ nivel+ " então seu título é : Aventureiro!")
}
else if (nivel >= 50 && nivel <= 99 ){
    console.log (nome +" ,você recebeu o nível : "+ nivel + " então seu título é : Guerreiro!")
}
else {
    console.log(nome +" ,você recebeu o nível : " + nivel +" então seu título é : LENDA!")
}