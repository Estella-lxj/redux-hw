import React from 'react';

const Counter = (props) => {
    return (
        <div>
            <h2>{props.counterValue}</h2>
            <button onClick={() => props.increaseCounter()}>+</button>
            <button onClick={() => props.decreaseCounter()}>-</button>
        </div>
    )
}

export default Counter;