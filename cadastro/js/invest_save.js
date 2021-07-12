$(document).ready(function () { /* Ao selecionar uma opção muda o background da pagina jQuery */

    var header = $('body');
    var backgrounds = new Array(
        'url(../img/b3_2.jpg)', 'url(../img/cripto.jpg)', 'url(../img/rendafixa.jpg)', 'url(../img/bolsa_eua.jpg)', 'url(../img/gradiente.png)');

    /* function SelectElement(valueToSelect) {
        var element = document.getElementById('test');
        element.value = '1';
    } */

    $('#plataformas').change(function () {
        header.css('background-image', backgrounds[$(this).val() - 1]);
    });

    /*var current = 0;
    
    function nextBackground() {
        current++;
        current = current % backgrounds.length;
        header.css('background-image', backgrounds[current]);
    }
    setInterval(nextBackground, 6000);*/

    header.css('background-image', backgrounds[4]);

});
/* Mask Money jQuery Total Investido3*/

$(function () {
    $('#Preco').maskMoney({ prefix: "R$ ", decimal: ',', thousands: '.', precision: 2 });
})

/* Mask Money jQuery Total Atual*/

$(function () {
    $('#Preco2').maskMoney({ prefix: "R$ ", decimal: ',', thousands: '.', precision: 2 });
})

$(function () {
    $('#quantidade').maskMoney({ thousands: '.', });
})

