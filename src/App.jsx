// import { useState } from 'react';
import './App.scss';
import './button.scss';
import Animals from './Components/Animals';
import Betkoks from './Components/Betkoks';
import BtnChangeRandom from './Components/BtnChangeRandom';
import ButtonChange from './Components/ButtonChange';
import Forest from './Components/Forest';
import Labas from './Components/Labas';
import PlusMinus from './Components/PlusMinus';
import Zebrai from './Components/Zebrai';
import rand from "./Functions/rand";


function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        <Betkoks bet="yellow"></Betkoks>
        <Animals dogs="buldog, smok" birds="gsacn, hdfhda"></Animals>
        <Forest forestColor="green" trees="fgjcvn, jhfj" insects="fjgf, vchh"></Forest>
        <Zebrai textColor={rand(1, 2) === 1 ? "red" : "blue"} />
        <ButtonChange />
        <BtnChangeRandom />
        <Labas></Labas>
        <PlusMinus/>
      </header>
    </div>
  );
}

export default App;
