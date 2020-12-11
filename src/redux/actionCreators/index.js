import axios from 'axios';

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

const requestStart = () => {

    return {
        type: 'FETCH_USER_START'
    }
}

const requestFail = (error) => {

    return {
        type: 'FETCH_USER_FAIL',
        error,
    }
}

const requestSuccess = (response) => {

    return {
        type: 'FETCH_USER_SUCCESS',
        data: response.data,
    }
}

export const getData = (url) => {

    return (dispatch, getState) => {
        dispatch(requestStart());
        axios.get(url)
            .then(res => {
                dispatch(requestSuccess(res))
            })
            .catch(e => dispatch(requestFail(e)))
    }
}

// 'https://api.github.com/users?per_page=100'