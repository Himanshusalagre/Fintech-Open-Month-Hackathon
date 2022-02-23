
window.addEventListener('scroll',checkScroll);

var executed = false;
function checkScroll() {
  var chart = document.getElementById('about');
  var coordinates = chart.getBoundingClientRect();
  var target = coordinates.top;
  if (window.scrollY >= target && executed ==false) {
    executed=true;
    var pieChartValues = [{
      y: 39.16,
      exploded: true,
      indexLabel: "Employee Satisfaction",
      color: "#00badd"
    }, {
      y: 21.8,
      indexLabel: "Gross Profit Margin",
      color: "#e60023"
    }, {
      y: 21.45,
      indexLabel: "Operating Expense Ratio",
      color: "#4267b2"
    }, {
      y: 5.56,
      indexLabel: "Net Profit Margin",
      color: "#ef4d5d"
    }, {
      y: 5.38,
      indexLabel: "Account Payable Turnout Ratio",
      color: "#5cb85c"
    }, {
      y: 3.73,
      indexLabel: "Return on Assets",
      color: "#fd9d08"
    }, {
      y: 2.92,
      indexLabel: "Operating Cash Flow",
      color: "#9dcb07"
    }];
    renderPieChart(pieChartValues);

    function renderPieChart(values) {

      var chart = new CanvasJS.Chart("pieChart", {
        backgroundColor: "white",
        colorSet: "colorSet2",

        title: {
          text: "Pie Chart",
          fontFamily: "Verdana",
          fontSize: 25,
          fontWeight: "normal",
        },
        animationEnabled: true,
        data: [{
          indexLabelFontSize: 15,
          indexLabelFontFamily: "Monospace",
          indexLabelFontColor: "darkgrey",
          indexLabelLineColor: "darkgrey",
          indexLabelPlacement: "outside",
          type: "pie",
          showInLegend: false,
          toolTipContent: "<strong>#percent%</strong>",
          dataPoints: values
        }]
      });
      chart.render();
    }
    var columnChartValues = [{
      y: 686.04,
      label: "Employee Satisfaction",
      color: "#00badd"
    }, {
      y: 381.84,
      label: "Gross Profit Margin",
      color: "#e60023"
    }, {
      y: 375.76,
      label: "Operating Expense Ratio",
      color: " #4267b2"
    }, {
      y: 97.48,
      label: "Net Profit Margin",
      color: "#ef4d5d"
    }, {
      y: 94.2,
      label: "Account Payable Turnout Ratio",
      color: "#5cb85c"
    }, {
      y: 65.28,
      label: "Return on Assets",
      color: "#fd9d08"
    }, {
      y: 51.2,
      label: "Operating Cash Flow",
      color: "#9dcb07"
    }];
    renderColumnChart(columnChartValues);

    function renderColumnChart(values) {

      var chart = new CanvasJS.Chart("columnChart", {
        backgroundColor: "white",
        colorSet: "colorSet3",
        title: {
          text: "Column Chart",
          fontFamily: "Verdana",
          fontSize: 25,
          fontWeight: "normal",
        },
        animationEnabled: true,
        legend: {
          verticalAlign: "bottom",
          horizontalAlign: "center"
        },
        theme: "theme2",
        data: [

          {
            indexLabelFontSize: 15,
            indexLabelFontFamily: "Monospace",
            indexLabelFontColor: "darkgrey",
            indexLabelLineColor: "darkgrey",
            indexLabelPlacement: "outside",
            type: "column",
            showInLegend: false,
            legendMarkerColor: "grey",
            dataPoints: values
          }
        ]
      });

      chart.render();
    }
  }
}
