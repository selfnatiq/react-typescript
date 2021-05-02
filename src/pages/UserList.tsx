import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { User } from '../types/user'
import UserCard from '../components/UserCard'

const UserList: React.FC = () => {
	const { data, isLoading } = useQuery<User[], Error>('users', async () => {
		const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
		return data
	})

	if (isLoading) return <h1>Loading...</h1>

	return (
		<div>
			<Link to="/">Go Home</Link>
			<h1>User List</h1>
			<div className="d-flex flex-wrap">
				{data!.map((user) => (
					<UserCard key={user.id} user={user} />
				))}
			</div>
		</div>
	)
}

export default UserList
