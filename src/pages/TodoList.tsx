import React, { useReducer, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useQuery } from 'react-query'
import Title from '../components/Title'
import { Todo } from '../types/todo'

type Actions =
	| { type: 'ADD_TODOS'; todos: Todo[] }
	| { type: 'ADD'; todo: Todo }
	| { type: 'REMOVE'; index: Todo['id'] }

const todoReducer = (state: Todo[], action: Actions) => {
	switch (action.type) {
		case 'ADD_TODOS':
			return action.todos
		case 'ADD':
			return [...state, action.todo]
		case 'REMOVE':
			return state.filter((todo) => todo.id !== action.index)
		default:
			return state
	}
}

const useTodos = () => {
	return useQuery<Array<Todo>, Error>('todos', async () => {
		const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos')
		return data
	})
}

const TodoList: React.FC = () => {
	const { data: todos, isLoading } = useTodos()
	const [myTodos, dispatch] = useReducer(todoReducer, [])

	useEffect(() => {
		dispatch({
			type: 'ADD_TODOS',
			todos: todos || [],
		})
	}, [isLoading, todos])

	if (isLoading) return <h1>Loading...</h1>

	return (
		<div>
			<Link to="/">Go Home</Link>
			<Title values="Todo List">{(title) => <h1>{title}</h1>}</Title>
			<ul>
				{myTodos.map((todo) => (
					<div key={todo.id} className="d-flex justify-content-between py-1">
						<li>{todo.title}</li>
						<div>
							<button
								onClick={() => dispatch({ type: 'REMOVE', index: todo.id })}
								className="btn btn-sm btn-danger mr-2"
							>
								Delete
							</button>
							<input type="checkbox" defaultChecked={todo.completed} />
						</div>
					</div>
				))}
			</ul>
		</div>
	)
}

export default TodoList
