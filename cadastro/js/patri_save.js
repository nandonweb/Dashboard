$(document).ready(function(){ /* Ao selecionar uma opção muda o background da pagina jQuery */

var header = $('body');
var backgrounds = new Array(
  'url(../img/casa.jpg)', 'url(../img/moto.jpg)', 'url(../img/porcem.jpg)', 'url(../img/empresa.jpg)', 'url(../img/ouro.jpg)',
  'url(../img/lote.jpg)', 'url(../img/real2.jpg)', 'url(../img/gradiente.png)');

/* function SelectElement(valueToSelect) {
    var element = document.getElementById('test');
    element.value = '1';
} */

$('#fundo').change(function () {
  header.css('background-image', backgrounds[$(this).val() - 1]);
});

/*var current = 0;

function nextBackground() {
    current++;
    current = current % backgrounds.length;
    header.css('background-image', backgrounds[current]);
}
setInterval(nextBackground, 6000);*/

header.css('background-image', backgrounds[7]);

});

/* Mask Money jQuery Valor dos Bens1*/

$(function () {
  $('#Preco').maskMoney({ prefix: "R$ ", decimal: ',', thousands: '.', precision: 2 });
})
