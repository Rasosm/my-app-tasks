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

// function PlusMinus() {
//     const [count, setCount] = useState(0);

//     const change = () => {
//         setCount(count + 1);
//     };
//     const change1 = () => {
//         setCount(count - 3);
//     };

//     return (
//         <>
//             <button onClick={change}>Plus</button>
//             <button onClick={change1}>Minus</button>
//             <div className="shape">{count}</div>
//         </>
//     );
// }

export default PlusMinus;
