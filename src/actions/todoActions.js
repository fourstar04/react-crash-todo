import { FETCH_TODOS, ADD_TODO, EDIT_TODO, DELETE_TODO } from './types';

export const fetchTodos = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/todos').then(response => {
    return response.json()
  }).then(todos => {
    dispatch({
      type: FETCH_TODOS,
      payload: todos
    })
  })
}

export const addTodo = (todo) => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(response => response.json())
    .then(json => {
      return dispatch({
        type: ADD_TODO,
        payload: json
      })
    })
}

export const editTodo = (todo) => dispatch => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
    method: 'PUT',
    body: JSON.stringify(todo),
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(response => response.json())
    .then(json => {
      return dispatch({
        type: EDIT_TODO,
        payload: json
      })
    })
}

export const deleteTodo = (id) => dispatch => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(response => response.json())
    .then(json => {
      return dispatch({
        type: DELETE_TODO,
        payload: id
      })
    })
}