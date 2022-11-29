import { useState } from 'react';

function PlusMinus() {
    const [count, setCount] = useState(0);

    const change = (arg) => {
        setCount(count + arg);
    };

    return (
        <>
            <button onClick={() => change(1)}>Plus</button>
            <button onClick={() => change(-3)}>Minus</button>
            <div className="shape">{count}</div>
        </>
    );
}

export default PlusMinus;
