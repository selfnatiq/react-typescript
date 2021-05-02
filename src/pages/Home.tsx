import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
	return (
		<div>
			<h1>Welcome to React with TypeScript</h1>
			<h2>Some Links</h2>
			<ul>
				<li>
					<Link to="/posts">All Posts</Link>
				</li>
				<li>
					<Link to="/todos">All Todos</Link>
				</li>
				<li>
					<Link to="/users">All Users</Link>
				</li>
			</ul>
		</div>
	)
}

export default Home
