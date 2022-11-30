import { useState } from 'react';

function BtnTest() {
    const [ro, setRo] = useState(true);

    return (
        <div className="App">
            <div className="App-header">
                <div
                    className="kv"
                    style={{
                        transform: ro ? null : 'rotate(90deg)',
                    }}
                ></div>
                <div>
                    <button onClick={() => setRo(true)}>GO</button>
                    <button
                        onClick={() => setRo(false)}
                        style={{ transform: 'rotate(90deg)' }}
                    >
                        GO
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BtnTest;
