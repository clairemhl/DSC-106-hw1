document.addEventListener('DOMContentLoaded', function () {
    var myChart = Highcharts.chart('container_bar', {
        chart: {
            type: 'bar'
        },
        title: {
            text: '2005-2011 number of students applied to UCSD'
        },
        xAxis: {
            categories: ['2005', '2006', '2007','2008','2009','2010','2011']
        },
        yAxis: {
            title: {
                text: 'Number of students applied'
            }
        },
        series: [{
            name: 'Male',
            data: [18147, 19838, 20566,21590,21725,22332,25097]
        }, {
          name: 'Female',
          data: [22371, 23748, 24507,25775,25321,25761,28351]
        }]
    });
});