import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editTodo, deleteTodo } from '../actions/todoActions'

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
                'line-through' : 'none'
        }
    }

    markComplete = (e) => {
        e.preventDefault()
        let todo = this.props.todo
        todo.completed = !todo.completed
        this.props.editTodo(todo)
    }

    deleteTodo = (e) => {
        e.preventDefault()
        this.props.deleteTodo(this.props.todo.id)
    }

    render() {
        const { title, completed } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.markComplete} checked={completed} /> {' '}
                    {title}
                    <button onClick={this.deleteTodo} style={btnStyle}> x </button>
                </p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 5px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default connect(null, { editTodo, deleteTodo })(TodoItem);
