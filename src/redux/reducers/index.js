import { combineReducers } from 'redux';
import todos from './todos';
import filter from './filter';
import counter from './counter';

const reducers = combineReducers({
    todos,
    filter,
    counter
});

export default reducers;





