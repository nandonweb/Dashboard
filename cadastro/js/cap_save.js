$(document).ready(function () {  /* Ao selecionar uma opção muda o background da pagina jQuery */

    var header = $('body');
    var backgrounds = new Array(
        'url(../img/prata.jpg)', 'url(../img/euro.jpg)', 'url(../img/imovel.jpg)',  'url(../img/rolex.jpg)', 'url(../img/cole.jpg)',  'url(../img/quadro.jpg)', 'url(../img/objeto_raro.jpg)',  'url(../img/gradiente.png)');

    /* function SelectElement(valueToSelect) {
        var element = document.getElementById('test');
        element.value = '1';
    } */

    $('#capital').change(function () {
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

/* Mask Money jQuery Valor id Preco*/

$(function () {
    $('#Preco').maskMoney({ prefix: "R$ ", decimal: ',', thousands: '.', precision: 2 });
})

$(function () {
    $('#quantidade').maskMoney({ thousands: '.',});
})