import React from 'react'
import { Link } from 'react-router-dom'

const NotFound: React.FC = () => {
	return (
		<div>
			<h1>Not Found</h1>
			<Link to="/">Go Home</Link>
		</div>
	)
}

export default NotFound
