import './App.css';
import { connect } from 'react-redux';
import * as actions from './redux/actionCreators';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import Counter from './components/Counter';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App(props) {

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Todo List</h1>
        <TodoInput addTodo={props.addTodo} />
        <TodoList
          todos={props.todos}
          filter={props.filter}
          toggleTodo={props.toggleTodo}
        />
        <TodoFilter setFilter={props.setFilter} />
        <hr />
        <h1>Counter</h1>
        <Counter
          counterValue={props.counterValue}
          increaseCounter={props.increaseCounter}
          decreaseCounter={props.decreaseCounter}
        />
        <hr />
        <Switch>
          <Route path='/' exact render={() => <UserList
            users={props.users} getUser={props.getData}
          />} />
          <Route path='/user/:username' render={() => <UserDetail
            detail={props.detail} getDetail={props.getData}
          />} />

        </Switch>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    filter: state.filter,
    counterValue: state.counter,
    users: state.users,
    detail: state.detail,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => dispatch(actions.addTodo(text)),
    toggleTodo: id => dispatch(actions.toggleTodo(id)),
    setFilter: filter => dispatch(actions.setFilter(filter)),
    increaseCounter: () => dispatch(actions.increaseCounter()),
    decreaseCounter: () => dispatch(actions.decreaseCounter()),
    getData: url => dispatch(actions.getData(url)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
