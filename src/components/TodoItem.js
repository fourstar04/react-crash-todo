import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editTodo, deleteTodo } from '../actions/todoActions'

export class TodoItem extends Component {
    getStyle = () => {
        return {
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
            <div className="list-group-item bg-white">
                <div className="form-control border-0 p-0 d-flex align-items-center">
                    <input className="mr-3 flex-shrink-0" type="checkbox" onChange={this.markComplete} checked={completed} />
                    <span style={this.getStyle()}>{title}</span>
                    <button className="btn btn-sm btn-outline-danger ml-auto" onClick={this.deleteTodo}> X </button>
                </div>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

export default connect(null, { editTodo, deleteTodo })(TodoItem);
