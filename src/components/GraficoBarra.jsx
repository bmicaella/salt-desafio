import React, { Component } from 'react'
import Chart from 'react-apexcharts'

import info from '../img/info-icon.png'

export default class GraficoBarra extends Component {

    state = {
        options: {

            responsive: [
                {
                    breakpoint: 300,
                    options: {
                        chart: {
                            width: 260,
                            height: 330
                        }
                    },
                },
                {
                    breakpoint: 380,
                    options: {
                        chart: {
                            width: 330,
                            height: 330
                        }
                    },
                },
                {
                    breakpoint: 420,
                    options: {
                        chart: {
                            width: 355,
                            height: 330
                        }
                    },
                },
                {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 330,
                        height: 350
                    }
                },
            },
            {
                breakpoint: 768,
                options: {
                    chart: {
                        width: 450,
                        height: 380
                    }
                },
            },
            {
                breakpoint: 800,
                options: {
                    chart: {
                        width: 670,
                        height: 400
                    }
                },
            },
            {
                breakpoint: 1000,
                options: {
                    chart: {
                        width: 720,
                        height: 400
                    }
                },
            },
            {
                breakpoint: 1200,
                options: {
                    chart: {
                        width: 900
                    }
                },
            }],

            chart: {
                type: 'bar',
                height: 300,
                fontFamily:  'Montserrat',                        
                color:  '#2822c34'
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
            name: 'N??mero de vagas',
            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }]
    }

    render() {
        return (
            <div className="App-grafico">

                <div className="App-grafico-title">
                    <h2>Barras</h2>
                    <img src={info} alt="Informa????o"></img>
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

