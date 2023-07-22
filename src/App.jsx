// eslint-disable-next-line no-unused-vars
import React from "react";
import './App.css';
// importando componentes
import Header from "./components/Header";
import Card from "./components/Card";

import data from './data';

export default function App() {

  const dataMap = data.map(card => {
    return(
      <Card 
        key = {card.id}
        {...card}
      />
    )
  })


  return (
    <div>
      <Header 
        key = {1}
        src = 'planeta.svg'
        alt = 'Logo de planeta'
      />
      
      <div className="div-cards">
        {dataMap}
      </div>

    </div>
  )
}
