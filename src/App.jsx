// import { useState } from 'react';
import './App.scss';
import './button.scss';
import Animals from './Components/Animals';
import Betkoks from './Components/Betkoks';
import BtnAdd from './Components/BtnAdd';
import BtnAddRemove from './Components/BtnAddRemove';
import BtnChangeRandom from './Components/BtnChangeRandom';
import BtnTest from './Components/BtnTest';
import ButtonChange from './Components/ButtonChange';
import Forest from './Components/Forest';
import Labas from './Components/Labas';
import PlusMinus from './Components/PlusMinus';
import Zebrai from './Components/Zebrai';
import rand from './Functions/rand';

const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Betkoks bet="yellow"></Betkoks>
                <Animals dogs="buldog, smok" birds="gsacn, hdfhda"></Animals>
                <Forest
                    forestColor="green"
                    trees="fgjcvn, jhfj"
                    insects="fjgf, vchh"
                ></Forest>
                <Zebrai textColor={rand(1, 2) === 1 ? 'red' : 'blue'} />
                <ButtonChange />
                <BtnChangeRandom />
                <Labas></Labas>
                <PlusMinus />
                <BtnAdd />
                <BtnAddRemove />
                <BtnAdd />
                <BtnTest />
            </header>
            <div className="container">
                <div className="container">
                    {dogs.map((dog, i) => (
                        <div key={i} className="shape">
                            {dog}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
