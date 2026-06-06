import leia from 'readline-sync'

let produto = leia.questionInt("digite o valor do produto: ")


if(produto >= 200 && produto <= 500) {
    console.log("o valor total do produto com desconto de 10% é: R$" + produto * 0.90 )
}

else if (produto > 500) 
    {console.log("o produto com desconto de 20% é: R$" + produto * 0.80)    
    }

    else {
        console.log("o produto não tem desconto, então o preço normal é: R$" + (produto))
    }

