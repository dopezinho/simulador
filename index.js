import {Financiamento} from './financiamento.js';

const comCarencia = document.querySelector('#comCarencia');
const listaSuspensa = document.querySelector('#listaSuspensa');
const corpoTabela = document.querySelector('#corpoTabela');
const botaoCalcular = document.querySelector('#botaoCalcular');
const textoValor = document.querySelector('#textoValor');
const textoEntrada = document.querySelector('#textoValor');
const textoTaxaJuros = document.querySelector('#textoValor');
const textoPrazo = document.querySelector('#textoValor');

comCarencia.addEventListener('change', function() {
    if(this.checked) {
        listaSuspensa.removeAttribute('hidden');
    }   else {
        listaSuspensa.setAttribute('hidden', 'hidden');
    }
});

botaoCalcular.addEventListener('click', function() {
    const valor = parseFloat(textoValor.value);
    const entrada = parseFloat(textoEntrada.value);
    const taxaJuros = parseFloat(textoTaxaJuros.value);
    const prazo = parseFloat(textoPrazo.value);
    let simulacao;
    simulacao = new Financiamento(valor,entrada,taxaJuros,prazo);
    simulacao.calcParcelasMensais();
    simulacao.exibeParcelas();
});