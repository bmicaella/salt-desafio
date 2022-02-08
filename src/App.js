import React, {useState} from 'react'

import GraficoBarra from './components/GraficoBarra'
import GraficoScatter from './components/GraficoScatter';

import './App.css';
import logo from './img/logo.png';
import filtrar from './img/filter-icon.png';

function App() {
  const [header, setHeader] = useState(false);

  const changeHeaderBackground = () => {
    if (window.scrollY >= 40) 
        setHeader(true)
    else
        setHeader(false)
  }

  return (
    <div className="App">

      <header className={header ? 'App-header active' : 'App-header'}>

        <img src={logo} alt="Logo Salt RH" className="App-logo"/>

      </header>

      <section className="App-section">

        <div className="App-div-title">

          <div>
            <h2>Dashboard</h2>
            <span>Desafio Técnico Frontend</span>
          </div>

          <button type="button">
            <img src={filtrar} alt="Filtrar"></img>
            Filtrar
          </button>

        </div>

        <div className="App-div-graficos">
          <GraficoBarra className="App-grafico"/>
          <GraficoScatter className="App-grafico"/>
        </div>

      </section>

    </div>
  )
}

export default App;
