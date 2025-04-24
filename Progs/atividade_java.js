const readline = require('readline-sync');

let numero
let contador = 0 
let ref = 2
let i
let ehprimo = 0

numero = Number (readline.question ("Informe quantos nuemros voce quer:"));

while (contador <numero){
    for (i = 2; i<ref/2+1; i++){
        if (ref % i==0)
            ehprimo == 1
        ref++ 
        break
    }

if (ehprimo == 0){
    console.log (ref,"\t" )
    ref++
    contador++
}

ehprimo == 0 
}