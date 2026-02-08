function createChart4() {
    am5.ready(function() {
        var root = am5.Root.new("chart4");

        root.setThemes([am5themes_Animated.new(root)]);

        var data = [
            { date: new Date(2012, 1, 1).getTime(), value: 8 },
            { date: new Date(2012, 1, 2).getTime(), value: 5 },
            { date: new Date(2012, 1, 3).getTime(), value: 12 },
            { date: new Date(2012, 1, 4).getTime(), value: 14 },
            { date: new Date(2012, 1, 5).getTime(), value: 11 }
        ];

        var chart = root.container.children.push(
            am5xy.XYChart.new(root, {
                focusable: true,
                panX: true,
                panY: true,
                wheelX: "panX",
                wheelY: "zoomX"
            })
        );

        var xAxis = chart.xAxes.push(
            am5xy.DateAxis.new(root, {
                maxDeviation: 0.1,
                groupData: false,
                baseInterval: {
                    timeUnit: "day",
                    count: 1
                },
                renderer: am5xy.AxisRendererX.new(root, {
                    minGridDistance: 50
                }),
                tooltip: am5.Tooltip.new(root, {})
            })
        );

        var yAxis = chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
                maxDeviation: 0.1,
                renderer: am5xy.AxisRendererY.new(root, {})
            })
        );

        var series = chart.series.push(
            am5xy.LineSeries.new(root, {
                minBulletDistance: 10,
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "value",
                valueXField: "date",
                tooltip: am5.Tooltip.new(root, {
                    pointerOrientation: "horizontal",
                    labelText: "{valueY}"
                })
            })
        );

        series.data.setAll(data);

        chart.set("scrollbarX", am5.Scrollbar.new(root, {
            orientation: "horizontal"
        }));

        series.appear(1000, 100);
        chart.appear(1000, 100);
    });
}

document.addEventListener('DOMContentLoaded', createChart4);
