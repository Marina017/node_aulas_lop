// desenha uma moldura em uma frase

const readline = require('readline-sync');
const ch = "█"

function barra(quantidade){
    for (let i=0; i<quantidade+4; i++){
        process.stdout.write(ch)
    }
}

// fora da função
const frase = readline.question("\n Digite uma frase:");

barra(frase.length);
console.log()
console.log(ch,frase,ch);
barra(frase.length);