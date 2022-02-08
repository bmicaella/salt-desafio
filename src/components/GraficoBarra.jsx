import React, { Component } from 'react'
import Chart from 'react-apexcharts'

import info from '../img/info-icon.png'

export default class GraficoBarra extends Component {

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
                type: 'bar',
                height: 300,
                fontFamily:  'Montserrat',                        color:  '#2822c34'
            },

            fill: {
                colors: ['#d0244c']
            },

            grid: {
                xaxis: {
                  lines: {
                    show: true
                  }
                },
                yaxis: {
                  lines: {
                    show: true
                  }
                },
              },

            plotOptions: {
                bar: {
                  borderRadius: 4,
                  horizontal: true,
                }
            },

            xaxis: {
                categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany']
            },
            
            

            dataLabels: {
                enabled: false,
                
            }   
        },

        series: [{
            name: 'Número de vagas',
            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }]
    }

    render() {
        return (
            <div className="App-grafico">

                <div className="App-grafico-title">
                    <h2>Barras</h2>
                    <img src={info} alt="Informação"></img>
                </div>

                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"
                    width="600"
                />

            </div>
          )
    }
}

