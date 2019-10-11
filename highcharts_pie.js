document.addEventListener('DOMContentLoaded', function () {
    var myChart = Highcharts.chart('container_pie', {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'The number of male and female students enrolled in UCSD'
        },
        series: [{
            name: ['Male','Female'],
            data: [['Male',3220],['Female',3484]]
        }]
    });
});