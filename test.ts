import chart from 'tui-chart';

console.log("hello world!");

const elem = document.getElementById('chart');
chart.lineChart(elem!, {
    categories: ['cate1', 'cate2', 'cate3'],
    series: [
        {
            name: 'Legend1',
            data: [20, 30, 50]
        },
    ]
}, {
    chart: {
        width: 500,
        height: 400,
        title: 'Chart Title'
    }
});