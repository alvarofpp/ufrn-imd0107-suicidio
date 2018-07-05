var jsonFile = '/home/roleta/anaconda-projects/imd0107_suicidio/site/data/racacor_estciv_sexo.json';
console.log(jsonFile);

$(function () {
  $.getJSON(jsonFile, function (dataJson) {
    // Estados civis
    var estadosCivis = ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'Separado'];

    // Sexo
    var sexo = ['Masculino', 'Feminino'];

    var chart = Highcharts.chart('racacor_estciv_sexo', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Suicídios'
      },
      xAxis: {
        categories: estadosCivis
      },
      yAxis: [{
        min: 0,
        title: {
          text: 'Quantidade'
        }
      }],
      legend: {
        shadow: false
      },
      tooltip: {
        shared: true
      },
      plotOptions: {
        column: {
          grouping: false,
          shadow: false,
          borderWidth: 0
        }
      },
      series: dataJson
    });
  });
});