var loc = window.location.pathname;
var dir = loc.substring(0, loc.lastIndexOf('/'));

$(function () {
  $.getJSON(dir + "/data/racacor_estciv_sexo.json", function (dataJson) {
    // Estados civis
    var estadosCivis = ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'Separado'];

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

  $.getJSON(dir + "/data/dia_estciv_racacor.json", function (dataJson) {
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    var chart = Highcharts.chart('dia_estciv_racacor', {
      chart: {
          type: 'scatter',
          zoomType: 'xy'
      },
      title: {
          text: 'Suicídios no decorrer do ano'
      },
      subtitle: {
          text: 'Por sexo e estado civil'
      },
      xAxis: {
        type: 'timestamp',
        title: {
            enabled: true,
            text: 'Dia/Mês'
        },
        labels:{
          formatter:function(){
            return Highcharts.dateFormat('%b/%Y', (this.value*1000));
          }
        }
      },
      yAxis: {
          title: {
              text: 'Quantidade'
          }
      },
      legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom',
          backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
          borderWidth: 1
      },
      plotOptions: {
        scatter: {
            marker: {
                radius: 3.5,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            }
        }
      },
      tooltip: {
          formatter: function () {
            var date = new Date(this.x*1000);
            return '<b>' + this.series.name + '</b><br>Data: '
              + ((date.getDay()+1) + '/' + monthNames[date.getMonth()] + '/' + date.getFullYear())
              + '<br>Quantidade: ' + this.y;
          }
      },
      series: dataJson
    });
  });
});