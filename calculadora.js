function digita_campo(numero_clicado){
    var campo = document.getElementsByTagName('input')[0]
    campo.value = campo.value + numero_clicado
}

function limpar(){
    var campo = document.getElementsByTagName('input')[0]
    campo.value = ""
}