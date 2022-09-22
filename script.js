const apertarBotao = document.getElementById('calculoInicial')
const limparInput = document.getElementById('altura').value
const voltarInicio = document.getElementById('saidaDados')

function CalcularIMC() {
    let valorAltura = parseFloat(document.getElementById('altura').value)
    let valorPeso = parseFloat(document.getElementById('peso').value)

    let valorIMC = valorPeso / (valorAltura*valorAltura)

    let situacao = document.getElementById('situacao')
    let dadoIMC = document.getElementById('dadoIMC')
    dadoIMC.innerHTML = valorIMC.toFixed(1)

    if(valorIMC < 18.5) {
        situacao.innerHTML = 'Abaixo do peso'
        dadoIMC.style.cssText = 'color: yellow'
    } else if ( valorIMC > 18.5 && valorIMC < 24.9) {
        situacao.innerHTML = 'Peso ideal'
        dadoIMC.style.cssText = 'color: green'
    } else if ( valorIMC > 25 && valorIMC < 29.9) {
        situacao.innerHTML = 'Sobrepeso'
        dadoIMC.style.cssText = 'color: blue'
    } else if (valorIMC > 29.9 && valorIMC < 34.9) {
        situacao.innerHTML = 'Obesidade grau 1'
        dadoIMC.style.cssText = 'color: red'
    } else if (valorIMC > 35 && valorIMC > 39.9) {
        situacao.innerHTML = 'Obesidade grau 2'
        dadoIMC.style.cssText = 'color: red'
    } else {
        situacao.innerHTML = 'Obesidade grau 3'
        dadoIMC.style.cssText = 'color: red'
    }

    apertarBotao.style.cssText = 'display: none'
    voltarInicio.style.cssText = 'display: flex'
}


const alturaInput = document.querySelector("#altura");
const pesoInput = document.getElementById('peso')
function Limpar() {
    alturaInput.value = "";
    pesoInput.value = ""
}

function Voltar() {
    voltarInicio.style.cssText = 'display: none'
    apertarBotao.style.cssText = 'display: flex'
}