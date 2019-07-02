// import Highcharts from 'highcharts';
// import Exporting from 'highcharts/modules/exporting';
// Exporting(Highcharts);

// console.log(Highcharts);


document.addEventListener('DOMContentLoaded', function () {
    const myChart = Highcharts.chart('chart-container', {
        chart: {
            type: 'bar',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100
        }, 
        data: {
            googleSpreadsheetKey: '1q70ERhgK8siSUUBRnDPtEO0_fq5eN0F2IODbanqOMx0',
            googleSpreadsheetWorksheet: 2,
            endColumn: 2
        },
        title: {
            text: null
        },
        legend: {
            align: 'right',
            symbolRadius: 0,
            verticalAlign: 'top',
            x: 10,
            itemMarginTop: -10,
        },
        plotOptions: {
            series: {
                clip: false,
                groupPadding: .1
            }
        },
        xAxis: {
            labels: {
                style: {
                    whiteSpace: 'nowrap',
                  }
            }
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow'
            },
            max: 8,
            tickAmount: 5
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10,
            shared: true,
            valueSuffix: ' hours'
        },
        responsive: {
            rules: [{
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                chart: {
                  spacingRight: 10
                },
                tooltip: {
                    enabled: false
                },
                yAxis: {
                    max: 9,
                    tickAmount: 4
                },
                legend: {
                    align: 'left',
                    x: -18,
                    itemMarginTop: 0
                }
              }
            }]
        }
        // series: [{
        //     name: 'Jane',
        //     data: [1, 6, 4]
        // }, {
        //     name: 'John',
        //     data: [5, 7, 3]
        // }]
    });
});