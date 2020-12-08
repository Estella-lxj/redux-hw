
export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        id: Date.now(),
        text
    }
};

export const toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
};

export const setFilter = filter => {
    return {
        type: 'SET_FILTER',
        filter
    }
};

export const increaseCounter = () => {
    return {
        type: 'INCREASE_COUNTER'
    }
};

export const decreaseCounter = () => {
    return {
        type: 'DECREASE_COUNTER'
    }
};