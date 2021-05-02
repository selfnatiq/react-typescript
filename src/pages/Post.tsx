import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { Link, useParams } from 'react-router-dom'

interface Props {}

interface ParamTypes {
	id: string
}

const getPostById = async (id: string) => {
	const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
	return data
}

interface CardInterface {
	id: string
	title: string
	body: string
}

const PostCard: React.FC<CardInterface> = ({ id, title, body }: CardInterface) => {
	return (
		<div className="card" style={{ width: '18rem' }}>
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<h6 className="card-subtitle mb-2 text-muted">Card id {id}</h6>
				<p className="card-text">{body}</p>
			</div>
		</div>
	)
}

const Post: React.FC<Props> = () => {
	const { id } = useParams<ParamTypes>()
	const { data, isLoading } = useQuery(`post-${id}`, () => getPostById(id))

	if (isLoading) return <h2>Loading...</h2>

	return (
		<>
			<Link className="link my-2" to="/posts">
				Go back
			</Link>
			<h3>Title:</h3>
			<p>{data.title}</p>
			<h4>Body:</h4>
			<p>{data.body}</p>
			<div className="py-3">
				<h4>Post Card</h4>
				<PostCard id={data.userId} title={data.title} body={data.body} />
			</div>
		</>
	)
}

export default Post
