const ListaCores= ['red', 'yellow', 'green', 'black', 'blue', '#FFFFFF']

var button = document.getElementById('botao')
var input = document.getElementById ('input_cor')
var span = document.getElementById ('texto_cor')

function Randomico(){
    return Math.floor(Math.random() * ListaCores.length)
}

function quandoClicar(){
    
    var rand = Randomico()
    var cor 
    if(input.value){
        cor = input.value
        

    }else{
        var rand = Randomico()
         cor = ListaCores [rand]
    }
    document.body.style.backgroundColor = cor
    span.textContent= cor
    //alert (input.value)
    
}

button.addEventListener('click', quandoClicar)
