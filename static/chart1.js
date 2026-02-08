function createChart1() {
    fetch('/get-datchar')
        .then(response => response.json())
        .then(data => {
            am5.ready(function() {
                var root = am5.Root.new("chartdiv");

                root.setThemes([am5themes_Animated.new(root)]);

                var chart = root.container.children.push(
                    am5xy.XYChart.new(root, {})
                );

                var xAxis = chart.xAxes.push(
                    am5xy.CategoryAxis.new(root, {
                        categoryField: "class",
                        renderer: am5xy.AxisRendererX.new(root, {})
                    })
                );

                var yAxis = chart.yAxes.push(
                    am5xy.ValueAxis.new(root, {
                        renderer: am5xy.AxisRendererY.new(root, {})
                    })
                );

                var series = chart.series.push(
                    am5xy.ColumnSeries.new(root, {
                        name: "Series",
                        xAxis: xAxis,
                        yAxis: yAxis,
                        valueYField: "value",
                        categoryXField: "class"
                    })
                );

                series.data.setAll(data);
                xAxis.data.setAll(data);
            });
        })
        .catch(error => console.error('Error fetching data for Chart 1:', error));
}

document.addEventListener('DOMContentLoaded', createChart1);
