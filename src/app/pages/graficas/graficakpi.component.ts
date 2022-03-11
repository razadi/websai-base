import { Component, OnInit } from '@angular/core';

declare var Chartist: any;
declare var Morris: any;
declare var $: any;
declare function init_plugins_easychart_ini();

@Component({
  selector: 'app-graficakpi',
  templateUrl: './graficakpi.component.html',
  styleUrls: ['./graficakpi.component.css']
})
export class GraficakpiComponent implements OnInit {

  labelsl: any[] = [];
  datasetsl: any[] = [];
  labelsb: any[] = [];
  datasetsb: any[] = [];

  mes = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

  constructor() { 
    // init_plugins_easychart_ini();
  }

  ngOnInit() {
    // this.graficas();
    // this.grafica2();
    // this.grafica3();
    this.grafica4();
    // this.grafica5();
  }

  graficas() {
    let grafil = new Chartist.Line('#sales-overview2', {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          series: [
              { meta: "Earning ($)", data: [10, 150, 110, 240, 200, 200, 300] }
          ]
          }, {
              low: 0,
              high: 400,
              showArea: false,
              divisor: 10,
              lineSmooth: false,
              fullWidth: true,
              showLine: true,
              chartPadding: 30,
              axisX: {
                  showLabel: true,
                  showGrid: false,
                  offset: 20
              },
              plugins: [
                  Chartist.plugins.tooltip()
              ],
              // As this is axis specific we need to tell Chartist to use whole numbers only on the concerned axis
              axisY: {
                  onlyInteger: true,
                  showLabel: true,
                  scaleMinSpace: 50,
                  showGrid: true,
                  offset: 10,
                  labelInterpolationFnc: function(value) {
                      return (value / 100) + 'k';
                  },
        
          }
    
      });
  }

  grafica2() {
    Morris.Area({
      element: 'morris-area-chart',
      data: [{
          period: '2010',
          iphone: 50,
          ipad: 80,
          itouch: 20
      }, {
          period: '2011',
          iphone: 130,
          ipad: 100,
          itouch: 80
      }, {
          period: '2012',
          iphone: 80,
          ipad: 60,
          itouch: 70
      }, {
          period: '2013',
          iphone: 70,
          ipad: 200,
          itouch: 140
      }, {
          period: '2014',
          iphone: 180,
          ipad: 150,
          itouch: 140
      }, {
          period: '2015',
          iphone: 105,
          ipad: 100,
          itouch: 80
      },
       {
          period: '2016',
          iphone: 250,
          ipad: 150,
          itouch: 200
      }],
      xkey: 'period',
      ykeys: ['iphone', 'ipad', 'itouch'],
      labels: ['iPhone', 'iPad', 'iPod Touch'],
      pointSize: 3,
      fillOpacity: 0,
      pointStrokeColors: ['#55ce63', '#009efb', '#2f3d4a'],
      behaveLikeLine: true,
      gridLineColor: '#e0e0e0',
      lineWidth: 3,
      hideHover: 'auto',
      lineColors: ['#55ce63', '#009efb', '#2f3d4a'],
      resize: true
      
  });
  }

  grafica3() {
    new Chartist.Bar('#ct-sales3-chart', {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          series: [
              [400, 120, 140, 130, 200, 150, 140, 130, 300, 120, 140, 150],
              [200, 188, 242, 300, 200, 400, 230, 300, 200, 400, 180, 300],
              [100, 200, 400, 600, 100, 200, 400, 370, 240, 200, 280, 330]
          ]
      }, {
          stackBars: true,
          axisX: {
              showGrid: false
          },
          axisY: {
              labelInterpolationFnc: function(value) {
                  return (value);
              },
              showGrid: true
          }, plugins: [
            Chartist.plugins.tooltip()
          ],
      }).on('draw', function(data) {
          if (data.type === 'bar') {
              data.element.attr({
                  style: 'stroke-width: 15px'
              });
          }
      });
  }

  grafica4() {
    
      let d1 = [];
      for (var i = 0; i <= 31; i += 1) {
        d1.push([i, (Math.random() * 25)]);
      }
      // var d2 = [23, 34, 12, 45, 33, 54, 32, 72, 12, 18, 11];
      let d2 = [];
      for (var i = 0; i <= 31; i += 1) {
        d2.push([i, (Math.random() * 25)]);
      }
      // var d3 = [12, 31, 22, 34, 25, 43, 42, 32, 41, 23, 22];
      let d3 = [];
      for (var i = 0; i <= 31; i += 1) {
        d3.push([i, (Math.random() * 25)]);
      }

      let ds = new Array();
      
      ds.push({
          label: "Validados",
          data: d1,
          bars: {
              order: 1
          }
      });
      ds.push({
          label: "Despachados",
          data: d2,
          bars: {
              order: 2
          }
      });
      ds.push({
          label: "Por despachar",
          data: d3,
          bars: {
              order: 3
          }
      });
      
      let stack = 0,
          bars = true,
          lines = true,
          steps = true;

      let options = {bars: {
                          show: true,
                          barWidth: 0.3,
                          fill: 1
                     },
                     grid: {
                          show: true,
                          aboveData: false,
                          labelMargin: 5,
                          axisMargin: 0,
                          borderWidth: 1,
                          minBorderMargin: 5,
                          clickable: true,
                          hoverable: true,
                          autoHighlight: false,
                          mouseActiveRadius: 20,
                          borderColor: '#f5f5f5'
                      },
                      series: {
                          stack: stack
                      },
                      legend: {
                          position: "ne",
                          margin: [0, 0],
                          noColumns: 0,
                          labelBoxBorderColor: null,
                          labelFormatter: function (label, series) {
                              return '' + label + '&nbsp;&nbsp;';
                          },
                          width: 30,
                          height: 5
                      },
                      yaxis: {
                          tickColor: '#f5f5f5', 
                          font: {
                            color: '#bdbdbd'
                          }
                      }, 
                      xaxis: {
                          tickColor: '#f5f5f5',
                          font: {
                              color: '#bdbdbd'
                          }
                      },
                      colors: ["#4F5467", "#009efb", "#26c6da"],
                      tooltip: true,
                      tooltipOpts: {
                          content: "%s : %y.0",
                          shifts: {
                              x: -30,
                              y: -50
                          },
                          font: {
                            color: '#bdbdbd'
                          }
                      }
        };
      $.plot($(".sales-bars-chart"), ds, options);
  }

  grafica5() {
    $('.easy-pie-chart-1').easyPieChart({
			easing: 'easeOutBounce',
			barColor : '#13dafe',
			lineWidth: 3,
			animate: 1000,
            lineCap: 'square',
            trackColor: '#e5e5e5',
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
  }

}
