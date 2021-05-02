import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Post from './pages/Post'
import TodoList from './pages/TodoList'
import UserList from './pages/UserList'

const App: React.FC = () => {
	return (
		<>
			<div className="container py-3">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/posts" component={Posts} />
					<Route path="/post/:id" component={Post} />
					<Route path="/todos" component={TodoList} />
					<Route path="/users" component={UserList} />
				</Switch>
			</div>
			<ReactQueryDevtools initialIsOpen={false} />
		</>
	)
}

export default App
