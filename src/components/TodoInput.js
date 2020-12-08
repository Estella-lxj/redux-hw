import React, { useState } from 'react';

const TodoInput = (props) => {

    const [input, setInput] = useState('');

    const handleAdd = (e) => {
        e.preventDefault();
        if (!input.length) return;
        props.addTodo(input);
        setInput('');
    }

    return (
        <div>
            <form onSubmit={handleAdd}>
                <input
                    type='text'
                    value={input}
                    onChange={e => setInput(e.target.value)} />
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default TodoInput;