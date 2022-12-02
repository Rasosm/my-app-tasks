import { useState } from 'react';
import { useEffect } from 'react';
import './App.scss';
import './button.scss';
import Animals from './Components/Animals';
import Betkoks from './Components/Betkoks';
import BtnAdd from './Components/BtnAdd';
import BtnAddRemove from './Components/BtnAddRemove';
import BtnChangeRandom from './Components/BtnChangeRandom';
import BtnTest from './Components/BtnTest';
import ButtonChange from './Components/ButtonChange';
import Dogs from './Components/Dogs';
import Forest from './Components/Forest';
import Labas from './Components/Labas';
import PlusMinus from './Components/PlusMinus';
import Zebrai from './Components/Zebrai';
import rand from './Functions/rand';

const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

function App() {
    const [books, setBooks] = useState(null);

    useEffect(() => {
        fetch('https://in3.dev/knygos/')
            .then((res) => res.json())
            .then((data) => setBooks(data));
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <ul>
                    {books?.map((b) => (
                        <li key={b.id}>
                            <img src={b.img} alt="book"></img>
                            <h2>{b.title}</h2>
                            <h2>{b.price}</h2>
                        </li>
                    ))}
                </ul>
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
                <Dogs />
                <div className="dogs">
                    {dogs.map((dog, i) => (
                        <div key={i} className="shape suo">
                            {dog}
                        </div>
                    ))}
                </div>
                <div className="dogs">
                    {dogs
                        .sort((a, b) => b.length - a.length)
                        .map((dog, i) => (
                            <div
                                key={i}
                                className="shape suo"
                                style={{ borderRadius: '50%' }}
                            >
                                {i + 1}
                                {dog}
                            </div>
                        ))}
                </div>
                <div className="dogs">
                    {dogs.map((dog, i) => (
                        <div
                            key={i}
                            className="shape suo"
                            style={{
                                borderRadius: i % 2 !== 0 ? '50%' : 'none',
                            }}
                        >
                            {dog}
                        </div>
                    ))}
                </div>
                <div className="dogs">
                    {dogs
                        .filter((dog) => dog[0].toUpperCase() !== dog[0])
                        .map((dog, i) => (
                            <div key={i} className="shape suo">
                                {dog}
                            </div>
                        ))}
                </div>
                <div className="dogs">
                    {dogs.map((dog, i) => (
                        <div
                            key={i}
                            className="shape suo"
                            style={{
                                color: dog.length > 6 ? 'green' : 'red',
                            }}
                        >
                            {dog.length}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
