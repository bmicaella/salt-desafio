import React, {useState} from 'react'

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

        <div>
          
          <ul>
            <li><a href="https://saltrh.com/" target="_blank" className="App-link" rel="noopener noreferrer">Início</a></li>
            <li><a href="https://saltrh.com/#solucoes" target="_blank" className="App-link" rel="noopener noreferrer">Soluções</a></li>
            <li><a href="https://saltrh.com/#contrate" target="_blank" className="App-link" rel="noopener noreferrer">Contrate</a></li>
            <li><a href="https://saltrh.com/conteudos-people-analytics/" target="_blank" className="App-link" rel="noopener noreferrer">Conteúdo</a></li>
          </ul>

          <button>Quero testar!</button>

        </div>

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

      <footer className="App-footer">

        <span>
          Desenvolvido com React JS
          | Por Micaella Pereira
          
          <a href="https://github.com/bmicaella/salt-desafio" target="_blank"
          rel="noopener noreferrer">
            <img src={github} alt="Ícone do Github" />
          </a>
        </span>

        <hr/>

      </footer>
    
    </div>
  )
}

export default App;
