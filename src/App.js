import './App.css';
import { connect } from 'react-redux';
import * as actions from './redux/actionCreators';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import Counter from './components/Counter';


function App(props) {
  console.log(props.todos);
  console.log(props.filter);
  console.log(props.counterValue)
  return (
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
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    filter: state.filter,
    counterValue: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => dispatch(actions.addTodo(text)),
    toggleTodo: id => dispatch(actions.toggleTodo(id)),
    setFilter: filter => dispatch(actions.setFilter(filter)),
    increaseCounter: () => dispatch(actions.increaseCounter()),
    decreaseCounter: () => dispatch(actions.decreaseCounter())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
