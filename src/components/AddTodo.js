import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions'


export class AddTodo extends Component {
  state = {
    title: ''
  }

  onChange = (e) => this.setState({ title: e.target.value })

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo({
      title: this.state.title,
      completed: false
    })
    this.setState({ title: '' })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div class="container my-3">
          <div className="input-group">
            <input className="form-control"
              type="text"
              name="title"
              style={{ flex: '10', padding: '5px' }}
              placeholder="Add Todo"
              value={this.state.title}
              onChange={this.onChange}
            />
            <div className="input-group-append">
              <input className="btn btn-primary" type="submit" value="Submit" />
            </div>
          </div>

        </div>

      </form>
    )
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default connect(null, { addTodo })(AddTodo)
