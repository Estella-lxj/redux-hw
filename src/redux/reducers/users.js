const initialState = { data: [], isFetching: false, error: null }
const users = (state = initialState, action) => {

    switch (action.type) {
        case ('FETCH_USER_START'):

            return {
                ...state,
                isFetching: true
            };
        case ('FETCH_USER_FAIL'):

            return {
                ...state,
                error: action.error,
                isFetching: false
            };
        case ('FETCH_USER_SUCCESS'):

            return {
                ...state,
                isFetching: false,
                error: null,
                data: action.data
            };
        default:

            return state;
    }
}

export default users;