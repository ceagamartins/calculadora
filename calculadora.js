function limpar() {
    document.getElementById('visor').value = ''
    document.getElementById('visor2').value = ''
}

function preencher(valor) {
    document.getElementById('visor2').value += valor
}

function calcular() {
    var resultado = 0
    document.getElementById('visor').value = document.getElementById('visor2').value
    resultado = document.getElementById('visor2').value
    //document.getElementById('visor').value = ''
    document.getElementById('visor2').value = eval(resultado)
}