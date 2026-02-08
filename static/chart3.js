function createChart3() {
    fetch('/get-datchar3')
        .then(response => response.json())
        .then(data => {
            am5.ready(function() {
                // إعداد الرسم البياني
                var root = am5.Root.new("chart3");
                root.setThemes([am5themes_Animated.new(root)]);

                var chart = root.container.children.push(
                    am5xy.XYChart.new(root, {})
                );

                var yAxis = chart.yAxes.push(
                    am5xy.CategoryAxis.new(root, {
                        categoryField: "Most_Frequent_Category",
                        renderer: am5xy.AxisRendererY.new(root, {})
                    })
                );

                var xAxis = chart.xAxes.push(
                    am5xy.ValueAxis.new(root, {
                        renderer: am5xy.AxisRendererX.new(root, {})
                    })
                );

                var series = chart.series.push(
                    am5xy.ColumnSeries.new(root, {
                        xAxis: xAxis,
                        yAxis: yAxis,
                        valueXField: "Churn_Probability",
                        categoryYField: "Most_Frequent_Category",
                        tooltip: am5.Tooltip.new(root, {
                            labelText: "{valueX}"
                        })
                    })
                );

                series.data.setAll(data);
                yAxis.data.setAll(data);
            });
        })
        .catch(error => console.error('Error fetching data for Chart 3:', error));
}
document.addEventListener('DOMContentLoaded', createChart3);
