const frutas = {
    'fruta1':
    {'nome' :'maça',
      'cor' : 'vermelha',
      'peso' : 20 ,		//dado em gramas
      'preço' : 5   	//em reais
	  ,'estragou' : true
    }


    ,'fruta2' :
    {
    'nome' : 'banana',
    'cor' : 'amarela',
    'peso' : 40 ,
    'preço' : 10
,'estragou' : false


}


,'fruta3' :
{'nome' : 'uva',
'cor' : 'verde',
'peso' : 30,
'preço' : 8
,'estragou' : false
}


,'fruta4' :
{'nome' : 'laranja',
'cor' : 'laranja',
'peso' : 50 ,
'preço' : 12
,'estragou' : true
}
}

for(let f in frutas){


if(frutas [f]["estragou"]==true){
    console.log ("Putz grila", frutas[f].nome,"está podre")
}


else{
    console.log(f, frutas[f].nome, "sua cor é",frutas[f].cor, frutas[f].peso, "gramas", "seu preço é R$",frutas[f].preco)
}

}