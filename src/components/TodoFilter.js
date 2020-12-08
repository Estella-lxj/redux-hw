import React, { useDtate } from 'react';

const TodoFilter = (props) => {

    return (
        <div>
            <button onClick={() => props.setFilter('all')}>All</button>
            <button onClick={() => props.setFilter('active')}>Active</button>
            <button onClick={() => props.setFilter('completed')}>Compeleted</button>
        </div>
    )
}

export default TodoFilter;