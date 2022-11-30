import { useState } from 'react';

function BtnAdd() {
    const [square, setSquare] = useState([]);

    const add = () => {
        setSquare((square) => [...square, 1]);
    };

    return (
        <>
            <button onClick={add}>Add</button>
            <div className="bin">
                {square.map((_, i) => (
                    <div className="square" key={i}></div>
                ))}
            </div>
        </>
    );
}

export default BtnAdd;
