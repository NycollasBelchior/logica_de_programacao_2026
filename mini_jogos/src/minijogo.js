import leia from 'readline-sync'

let opcoes = ['Pedra', 'Papel', 'Tesoura'];

let numerosorteado = Math.floor(Math.random()* 3);
let escolhaUsuario = leia.keyInSelect (opcoes, "escolha sua opcao")

if(escolhaUsuario === -1) {
    console.log("JERONIMOU")
}else {
    console.log("você escolheu: " + opcoes[escolhaUsuario]);
        console.log("o computador escolheu: " + opcoes[numerosorteado]);

        if (numerosorteado === escolhaUsuario){
            console.log("empatou")
        }
        else if (numerosorteado === 0 && escolhaUsuario === 2 || 
                numerosorteado === 1 && escolhaUsuario ===0 ||
                numerosorteado === 2 && escolhaUsuario === 1
               
        ){
            console.log("você perdeu")
        } else {
            console.log("você ganhou")
        }


    
} 
       
