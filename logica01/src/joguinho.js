
import leia from "readline-sync";
let numeroAleatorio = Math.floor(Math.random() * 10000)

let resposta;
let tentativas=0
let maximoDeTentativas= 80000



do {
    resposta= leia.questionInt("adivinhe o numero 0 a 10000:  ");
    tentativas++;
    maximoDeTentativas--;
    if (resposta > numeroAleatorio){
        console.log("número secreto é menor" )}
    else if (resposta < numeroAleatorio){
        console.log("número secreto é maior" )
    };
  



}while(resposta !== numeroAleatorio && maximoDeTentativas > 0);
    if (resposta == numeroAleatorio){console.log("você ganhou")}
    else {console.log("você não ganhou")}
    console.log ("tentativas: " + tentativas);
    
    
    
    