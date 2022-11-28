// import { useState } from 'react';
import './App.scss';
import './button.scss';
import Animals from './Components/Animals';
import Betkoks from './Components/Betkoks';
import Forest from './Components/Forest';
import Labas from './Components/Labas';
import Zebrai from './Components/Zebrai';


function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        <Betkoks bet="yellow"></Betkoks>
        <Animals dogs="buldog, smok" birds="gsacn, hdfhda"></Animals>
        <Forest forestColor="green" trees="fgjcvn, jhfj" insects="fjgf, vchh"></Forest>
        <Zebrai randColor="2"></Zebrai>
        <button>Change shape</button>
        <Labas></Labas>
      </header>
    </div>
  );
}

export default App;
