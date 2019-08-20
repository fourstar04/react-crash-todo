import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import { fetchTodos } from '../actions/todoActions'

class Todos extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div className="container">
        <div className="list-group">
          {this.props.todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} />
          ))}
        </div>
      </div>

    )
  }
}

//PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  todos: state.todos.todos
});

export default connect(mapStateToProps, { fetchTodos })(Todos);
