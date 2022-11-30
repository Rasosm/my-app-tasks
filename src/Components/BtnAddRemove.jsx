import { useState } from 'react';

function BtnAddRemove() {
    const [sq, setSq] = useState([]);

    const addRed = () => {
        setSq((sq) => [
            ...sq,
            {
                color: 'crimson',
            },
        ]);
    };

    const addBlue = () => {
        setSq((s) => [
            ...sq,
            {
                color: 'blue',
            },
        ]);
    };

    const reset = () => {
        setSq((sq) => []);
    };

    return (
        <div className="App">
            <div className="App-header">
                <div className="bin">
                    {sq.map((what, i) => (
                        <div
                            key={i}
                            className="square"
                            style={{ backgroundColor: what.color }}
                        ></div>
                    ))}
                </div>
                <div>
                    <button onClick={addRed}>Add red</button>
                    <button onClick={addBlue}>Add blue</button>
                    <button onClick={reset}>Reset</button>
                </div>
            </div>
        </div>
    );
}
export default BtnAddRemove;
