var numero1 = ""
var estaAdd = false

function digita_campo(numero_clicado){
    var valorCampo = document.getElementsByTagName('input')[0]
 
    if (estaAdd){
        numero1 = valorCampo.value
        valorCampo.value = numero_clicado
        estaAdd = false
   } else{
        valorCampo.value = valorCampo.value + numero_clicado
   }
}

function limpar(){
    var valorCampo = document.getElementsByTagName('input')[0]
    valorCampo.value = ""
}

function resultado(){
    var valorCampo = document.getElementsByTagName('input')[0]
    var resultado = parseFloat(numero1) + parseFloat(valorCampo.value)
    valorCampo.value = resultado
}

function botaoSoma(){
    estaAdd = true
}