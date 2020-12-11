import { combineReducers } from 'redux';
import todos from './todos';
import filter from './filter';
import counter from './counter';
import users from './users';
import detail from './detail';

const reducers = combineReducers({
    todos,
    filter,
    counter,
    users,
    detail,
});

export default reducers;





