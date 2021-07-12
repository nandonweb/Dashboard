$(document).ready(function () {  /* Ao selecionar uma opção muda o background da pagina jQuery */

    var header = $('body');
    var backgrounds = new Array(
        'url(../img/empre.jpg)', 'url(../img/finan.jpg)', 'url(../img/divida.jpg)', 'url(../img/gradiente.png)');

    /* function SelectElement(valueToSelect) {
        var element = document.getElementById('test');
        element.value = '1';
    } */

    $('#dividas').change(function () {
        header.css('background-image', backgrounds[$(this).val() - 1]);
    });

    /*var current = 0;
    
    function nextBackground() {
        current++;
        current = current % backgrounds.length;
        header.css('background-image', backgrounds[current]);
    }
    setInterval(nextBackground, 6000);*/

    header.css('background-image', backgrounds[3]);

});

/* Mask Money jQuery Valor ID Preco*/

$(function () {
    $('#Preco').maskMoney({ prefix: "R$ ", decimal: ',', thousands: '.', precision: 2 });
})