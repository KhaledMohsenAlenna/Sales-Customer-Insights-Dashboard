function createChart2() {
  fetch('/get-datchar2')
      .then(response => response.json())
      .then(data => {
          am5.ready(function() {
              var root = am5.Root.new("chart2");

              root.setThemes([am5themes_Animated.new(root)]);

              var chart = root.container.children.push(
                  am5percent.PieChart.new(root, {
                      radius: am5.percent(90),
                      innerRadius: am5.percent(50)
                  })
              );

              var series = chart.series.push(
                  am5percent.PieSeries.new(root, {
                      valueField: "value",
                      categoryField: "class"
                  })
              );

              series.data.setAll(data);

              // Create legend
              var legend = chart.children.push(
                  am5.Legend.new(root, {
                      centerY: am5.percent(50),
                      y: am5.percent(50),
                      layout: root.verticalLayout
                  })
              );

              legend.data.setAll(series.dataItems);
          });
      })
      .catch(error => console.error('Error fetching data for Chart 2:', error));
}

document.addEventListener('DOMContentLoaded', createChart2);
