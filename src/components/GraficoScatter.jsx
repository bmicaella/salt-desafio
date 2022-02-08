import React, { Component } from 'react'
import Chart from 'react-apexcharts'

import info from '../img/info-icon.png'

export default class GraficoScatter extends Component {

    state = {
        options: {

            responsive: [{
                breakpoint: 768,
                options: {
                    chart: {
                        width: 350
                    }
                },
            }],

            chart: {
                type: 'scatter',
                height: 300,
                zoom: {
                    enabled: false
                }
            },

            fill: {
                colors: ['#d0244c']
            },
            
            //cinza #181c24
            //rosa #d0244c

            grid: {
                row: {
                  colors: ['#ffffff']
                },
                column: {
                  colors: ['#ffffff']
                }
            },

            plotOptions: {
                bar: {
                  borderRadius: 4,
                  horizontal: true,
                }
            },

            xaxis: {
                tickAmount: 10,
                labels: {
                  formatter: function(val) {
                    return parseFloat(val).toFixed(1)
                  }
                }
            },

            yaxis: {
                tickAmount: 7
            },

            dataLabels: {
                enabled: false
            }   
        },

        series: [{
            name: "Amostra A",
            data: [
            [16.4, 5.4], [21.7, 2], [25.4, 3], [19, 2], [10.9, 1], [13.6, 3.2], [10.9, 7.4], [10.9, 0], [10.9, 8.2], [16.4, 0], [16.4, 1.8], [13.6, 0.3], [13.6, 0], [29.9, 0]]
          },{
            name: "Amostra B",
            data: [
            [36.4, 13.4], [1.7, 11], [5.4, 8], [9, 17], [1.9, 4], [3.6, 12.2], [1.9, 14.4], [1.9, 9], [1.9, 13.2], [1.4, 7], [6.4, 8.8], [3.6, 4.3], [1.6, 10], [9.9, 2], [7.1, 15]]
          },{
            name: "Amostra C",
            data: [
            [21.7, 3], [23.6, 3.5], [24.6, 3], [29.9, 3], [21.7, 20], [23, 2], [10.9, 3], [28, 4], [27.1, 0.3], [16.4, 4], [13.6, 0], [19, 5], [22.4, 3], [24.5, 3], [32.6, 3], [27.1, 4]]
          }],
    }

    render() {
        return (
            <div className="App-grafico">

            <div className="App-grafico-title">
                    <h2>Scatter</h2>
                    <img src={info} alt="Informação"></img>
                </div>

                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="scatter"
                    width="600"
                />

            </div>
          )
    }
}

