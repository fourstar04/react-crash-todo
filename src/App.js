import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { todos: [] }
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (id === todo.id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route path="/" exact render={props => (
              <React.Fragment>
                <AddTodo />
                <Todos todos={this.state.todos} markComplete={this.markComplete} />
              </React.Fragment>
            )} />
            <Route path="/about" render={props => (
              <React.Fragment>
                <About />
              </React.Fragment>
            )} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
