import React from 'react'
import { User } from '../types/user'

interface Props {
	user: User
}

const UserCard: React.FC<Props> = ({ user: { name, email, address, phone } }: Props) => {
	return (
		<div className="card m-1" style={{ width: '300px' }}>
			<img
				src="https://www.w3schools.com/bootstrap4/img_avatar1.png"
				className="card-img-top"
				alt="User"
				style={{ width: '100%' }}
			/>
			<div className="card-body">
				<h4 className="card-title">{name}</h4>
				<div className="card-text">
					<div>Email: {email}</div>
					<div>Phone: {phone}</div>
					<div>
						Address: {address.city}, {address.street}
					</div>
				</div>
				<button className="btn btn-primary mt-2">See Profile</button>
			</div>
		</div>
	)
}

export default UserCard
