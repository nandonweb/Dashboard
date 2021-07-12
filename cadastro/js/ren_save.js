$(document).ready(function () {  /* Ao selecionar uma opção muda o background da pagina jQuery */

    var header = $('body');
    var backgrounds = new Array(
        'url(../img/clt.jpg)', 'url(../img/entregador.jpg)', 'url(../img/motorista.jpeg)', 'url(../img/freelancer.jpg)', 'url(../img/contrato.jpg)',
        'url(../img/revenda.jpg)', 'url(../img/gradiente.png)');

    /* function SelectElement(valueToSelect) {
        var element = document.getElementById('test');
        element.value = '1';
    } */

    $('#renda').change(function () {
        header.css('background-image', backgrounds[$(this).val() - 1]);
    });

    /*var current = 0;
    
    function nextBackground() {
        current++;
        current = current % backgrounds.length;
        header.css('background-image', backgrounds[current]);
    }
    setInterval(nextBackground, 6000);*/

    header.css('background-image', backgrounds[6]);

});

/* Mask Money jQuery Preco*/

$(function () {
    $('#Preco').maskMoney({ decimal: '.', thousands: '.', precision: 2 });
})