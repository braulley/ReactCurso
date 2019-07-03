import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
//import PrimeiroComponent from './components/PrimeiroComponent'
import {CompA, CompB as B} from './components/DoisComponentes'

/*ReactDOM.render(
  <App />,
  document.getElementById('root')
);*/

const jsx = <ul>
<li>Pedro</li>
<li>Maria</li>
<li>Ana</li>
</ul>;


ReactDOM.render(
  /*<div><PrimeiroComponent valor="Bom Dia" Abcd={123}/></div>*/
  <div>
    <CompA valor="Olá, eu sou o A"/>
    <B valor="Olá, eu sou o B" />
  </div>,
  document.getElementById('root')
);

/*const lista = document.createElement('ul')

let item = document.createElement('li')
let texto = document.createTextNode('1) Pedro')
item.appendChild(texto)
lista.appendChild(item)


item = document.createElement('li')
texto = document.createTextNode('2) Maria')
item.appendChild(texto)
lista.appendChild(item)


item = document.createElement('li')
texto = document.createTextNode('3) Ana')
item.appendChild(texto)
lista.appendChild(item)


const elemento = document.getElementById('root')
elemento.appendChild(lista)
*/