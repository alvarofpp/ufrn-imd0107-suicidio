// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
['br-sp', "SP"],
['br-ma', "MA"],
['br-pa', "PA"],
['br-sc', "SC"],
['br-ba', "BA"],
['br-ap', "AP"],
['br-ms', "MS"],
['br-mg', "MG"],
['br-go', "GO"],
['br-rs', "RS"],
['br-to', "TO"],
['br-pi', "PI"],
['br-al', "AL"],
['br-pb', "PB"],
['br-ce', "CE"],
['br-se', "SE"],
['br-rr', "RR"],
['br-pe', "PE"],
['br-pr', "PR"],
['br-es', "ES"],
['br-rj', "RJ"],
['br-rn', "RN"],
['br-am', "AM"],
['br-mt', "MT"],
['br-df', "DF"],
['br-ac', "AC"],
['br-ro', "RO"]
];

// Create the chart
Highcharts.mapChart('container', {
  chart: {
    map: 'countries/br/br-all'

  },

  title: {
    text: ''
  },

  subtitle: {
    text: ''
  },

  

  colorAxis: {
    min: 3
  },

  series: [{
    data: data,
    name: 'Random data',
    states: {
      hover: {
        color: '#F6F6F6'
      }
    },
    dataLabels: {
      enabled: true,
    }
  }]
});