import React from 'react'

import GraficoBarra from './components/GraficoBarra'
import GraficoScatter from './components/GraficoScatter';

import './App.css';
import logo from './img/logo.png';
import filtrar from './img/filter-icon.png';
import github from './img/github-icon.png';

function App() {

  return (
    <div className="App">

      <header className="App-header">

        <img src={logo} alt="Logo Salt RH" className="App-logo"/>

        <button type="button">Quero testar!</button>

      </header>

      <section className="App-section">

        <div className="App-div-header">

          <div className="App-div-title">
            <h2>Dashboard</h2>
            <span>Desafio Técnico Frontend</span>
          </div>

          <button type="button">
            <img src={filtrar} alt="Filtrar" />
            Filtrar
          </button>

        </div>

        <div className="App-div-graficos">
          <GraficoBarra className="App-grafico"/>
          <GraficoScatter className="App-grafico"/>
        </div>

      </section>

      <footer className="App-footer">

        <div>
          <p> Desenvolvido com React JS </p>
          <p>Por Micaella Pereira</p>
          
          <a 
            href="https://github.com/bmicaella/salt-desafio" 
            target="_blank"
            rel="noopener noreferrer">

            <img src={github} alt="Ícone do Github" />
            
          </a>
        </div>

        <hr/>

      </footer>
    
    </div>
  )
}

export default App;
