function juros() {
    // var resultado = window.document.querySelector("#resultado");

    var capital1 = window.document.getElementById("capital");
    var taxa1 = window.document.getElementById("taxa");
    var tempo1 = window.document.getElementById("tempo");

    var n1 = Number(capital1.value);
    var n2 = Number(taxa1.value);
    var n3 = Number(tempo1.value);
    var div = 100;

    var calculo1 = n1 * n2 / div * n3;
    var n4 = Number(calculo1);
    var n5 = (n4 + n1);

    resultado.innerHTML = '';
    resultado.innerHTML += 'Valor Investido: R$ ' + n1 + '<br>';
    resultado.innerHTML += 'Valor Final: R$ ' + n5 +  '<br>';
    resultado.innerHTML += 'Juros: R$ ' + n4 + '<br>';
}