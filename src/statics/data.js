import Highcharts from 'highcharts'

export let basicData = {
  chart: {
    type: 'spline'
  },
  title: {
    text: 'Monthly Average Temperature'
  },
  subtitle: {
    text: 'Source: WorldClimate.com'
  },
  xAxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ]
  },
  yAxis: {
    title: {
      text: 'Temperature'
    },
    labels: {
      formatter: function () {
        return this.value + '°'
      }
    }
  },
  tooltip: {
    crosshairs: true,
    shared: true
  },
  credits: {
    enabled: false
  },
  plotOptions: {
    spline: {
      marker: {
        radius: 4,
        lineColor: '#666666',
        lineWidth: 1
      }
    }
  },
  series: []
}

export let asyncData = {
  name: 'Tokyo',
  marker: {
    symbol: 'square'
  },
  data: [
    7.0,
    6.9,
    9.5,
    14.5,
    18.2,
    21.5,
    25.2,
    {
      y: 26.5,
      marker: {
        symbol: 'url(http://www.highcharts.com/demo/gfx/sun.png)'
      }
    },
    23.3,
    18.3,
    13.9,
    9.6
  ]
}

// area chart data
export const AreaData = {
  chart: {
    type: 'area'
  },
  title: {
    text: 'S&P 500 vs Mutual Funds'
  },
  subtitle: {
    text:
            'Source: <a href="http://thebulletin.metapress.com/content/c4120650912x74k7/fulltext.pdf">' +
            'thebulletin.metapress.com</a>'
  },
  xAxis: {
    allowDecimals: false,
    labels: {
      formatter: function () {
        return this.value // clean, unformatted number for year
      }
    }
  },
  yAxis: {
    title: {
      text: ''
    },
    labels: {
      formatter: function () {
        return this.value / 1000 + 'M$'
      }
    }
  },
  // tooltip: {
  //   pointFormat:
  //           '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
  // },
  plotOptions: {
    area: {
      pointStart: 1960,
      marker: {
        enabled: false,
        symbol: 'circle',
        radius: 2,
        states: {
          hover: {
            enabled: true
          }
        }
      }
    }
  },
  series: [
    {
      name: 'S&P 500',
      data: [
        null,
        null,
        null,
        null,
        null,
        6,
        11,
        32,
        110,
        235,
        369,
        640,
        1005,
        1436,
        2063,
        3057,
        4618,
        6444,
        9822,
        15468,
        20434,
        24126,
        27387,
        29459,
        31056,
        31982,
        32040,
        31233,
        29224,
        27342,
        26662,
        26956,
        27912,
        28999,
        28965,
        27826,
        25579,
        25722,
        24826,
        24605,
        24304,
        23464,
        23708,
        24099,
        24357,
        24237,
        24401,
        24344,
        23586,
        22380,
        21004,
        17287,
        14747,
        13076,
        12555,
        12144,
        11009,
        10950,
        10871,
        10824,
        10577,
        10527,
        10475,
        10421,
        10358,
        10295,
        10104
      ]
    },
    {
      name: 'Mutual Funds',
      data: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        5,
        25,
        50,
        120,
        150,
        200,
        426,
        660,
        869,
        1060,
        1605,
        2471,
        3322,
        4238,
        5221,
        6129,
        7089,
        8339,
        9399,
        10538,
        11643,
        13092,
        14478,
        15915,
        17385,
        19055,
        21205,
        23044,
        25393,
        27935,
        30062,
        32049,
        33952,
        35804,
        37431,
        39197,
        45000,
        43000,
        41000,
        39000,
        37000,
        35000,
        33000,
        31000,
        29000,
        27000,
        25000,
        24000,
        23000,
        22000,
        21000,
        20000,
        19000,
        18000,
        18000,
        17000,
        16000
      ]
    }
  ]
}

// pie chart data
export const PieData = {
  chart: {
    type: 'pie',
    options3d: {
      enabled: true,
      alpha: 45
    }
  },
  title: {
    text: 'Exceptions Summary'
  },
  subtitle: {
    text: 'Exceptions summary as a pie chart'
  },
  plotOptions: {
    pie: {
      innerSize: 100,
      depth: 45
    }
  },
  series: [
    {
      name: 'No of exceptions',
      data: [
        ['Vendor Missing', 16],
        ['No Vendor Value', 4088],
        ['Invalid Data', 1024],
        ['Underlying', 12],
        ['Vendor Mismatch', 5433],
        ['Value Changed', 23],
        ['Geneva Mismatches', 1132],
        ['Anna Mismatches', 5432]
      ]
    }
  ]
}

export const DrilldownData = {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Portfolio'
  },
  xAxis: {
    title: {
      text: 'Security Type'
    },
    type: 'category'
  },

  yAxis: {
    title: {
      text: 'Count'
    }

  },

  legend: {
    enabled: false
  },
  plotOptions: {
    series: {
      borderWidth: 0,
      dataLabels: {
        enabled: true
      }
    }
  },
  series: [
    {
      name: 'Securities',
      colorByPoint: true,
      data: [
        {
          name: 'Equity Common Stock',
          y: 5,
          drilldown: 'animals',
          color: '#e45e2d'
        },
        {
          name: 'Corporate Bonds',
          y: 2,
          drilldown: 'fruits',
          color: '#ee8695'
        },
        {
          name: 'Equity Index',
          y: 4,
          drilldown: 'cars',
          color: '#37114e'
        }
      ]
    }
  ],
  drilldown: {
    series: [
      {
        id: 'animals',
        data: [['EQST000012', 4], ['EQST000056', 2], ['EQST000078', 1], ['EQST000112', 2], ['EQST000056', 1]]
      },
      {
        id: 'fruits',
        data: [
          {
            name: 'COBO00034',
            y: 4
          },
          {
            name: 'COBO00056',
            y: 2,
            drilldown: 'third-leves'
          }
        ]
      },
      {
        id: 'cars',
        data: [['EQIN00054', 4], ['EQIN00067', 2], ['EQIN0005489', 2]]
      },
      {
        id: 'third-leves',
        data: [['EQIN00054', 4], ['EQIN00054', 2], ['EQIN00054', 2]]
      }
    ]
  }
}

export const threeDData = {
  chart: {
    renderTo: 'container',
    type: 'column',
    options3d: {
      enabled: true,
      alpha: 15,
      beta: 15,
      depth: 50,
      viewDistance: 25
    }
  },
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  plotOptions: {
    column: {
      depth: 25
    }
  },
  series: [
    {
      data: [
        29.9,
        71.5,
        106.4,
        129.2,
        144.0,
        176.0,
        135.6,
        148.5,
        216.4,
        194.1,
        95.6,
        54.4
      ]
    }
  ]
}

export const responsiveData = {
  chart: {
    type: 'spline',
    animation: Highcharts.svg, // don't animate in old IE
    marginRight: 10,
    events: {
      load: function () {
        // set up the updating of the chart each second
        var series = this.series[0]
        setInterval(function () {
          var x = new Date().getTime(), // current time
            y = Math.random()
          series.addPoint([x, y], true, true)
        }, 1000)
      }
    }
  },
  title: {
    text: 'Risk Attributes'
  },
  xAxis: {
    type: 'datetime',
    title: {
      text: 'Timestamp'
    },
    tickPixelInterval: 150
  },
  yAxis: {
    title: {
      text: 'Beta'
    },
    plotLines: [
      {
        value: 0,
        width: 1,
        // color: '#808080'
        color: 'orange'
      }
    ]
  },
  tooltip: {
    formatter: function () {
      return (
        '<b>' +
          this.series.name +
          '</b><br/>' +
          Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +
          '<br/>' +
          Highcharts.numberFormat(this.y, 2)
      )
    }
  },
  legend: {
    enabled: false
  },
  exporting: {
    enabled: false
  },
  series: [
    {
      name: 'Beta',
      data: (function () {
        // generate an array of random data
        var data = [],
          time = new Date().getTime(),
          i

        for (i = -19; i <= 0; i += 1) {
          data.push({
            x: time + i * 1000,
            y: Math.random()
          })
        }
        return data
      })()
    }
  ]
}
