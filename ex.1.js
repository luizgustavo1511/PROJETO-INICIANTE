const numerosHex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

var button = document.getElementById('botao')

var span = document.getElementById('texto_cor')

function numeroRandomico(){
    return Math.floor(Math.random()*numerosHex.length)
}

function quandoClicar(){
    
    var cor = '#'
    for (var i = 0; i<6; i++){
        cor += numerosHex[numeroRandomico()]
    }
    
    document.body.style.backgroundColor = cor
    span.textContent = cor
}
button.addEventListener('click', quandoClicar )
