google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Bolsa de Valores', 'Horas por Dia'],
    ['Cripto', 1200],
    ['Tesouro Nacional', 15000],
    ['Bolsa EUA', 5000],
    ['CDB/CDI', 20000],
    ['Bolsa de Valores', 15000]
  ]);

  var options = {
    title: 'Grafico de Pizza',
    is3D: true,
};

  var chart = new google.visualization.PieChart(document.getElementById('grafico_pizza'));
  chart.draw(data, options);
}
