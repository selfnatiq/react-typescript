import axios from 'axios'
import { useQuery, useQueryClient } from 'react-query'
import { Link } from 'react-router-dom'
import { Post } from '../types/post'
import Title from '../components/Title'

const usePosts = () => {
	return useQuery<Post[], Error>('posts', async () => {
		const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
		return data
	})
}

const Posts: React.FC = () => {
	const { data, isLoading } = usePosts()
	const queryClient = useQueryClient()

	if (isLoading) return <h2>Loading...</h2>

	return (
		<>
			<Link to="/">Go Home</Link>
			<Title values={{ title: 'Posts' }}>{(values) => <h1>{values.title}</h1>}</Title>
			<strong className="text-danger">
				<em>Green ones are cached so they won't be fetched again...</em>
			</strong>
			{data!.map(({ id, title }: { id: number; title: string }) => (
				<p key={id}>
					<Link
						className={queryClient.getQueryData(`post-${id}`) ? 'text-success' : ''}
						to={`/post/${id}`}
					>
						{title}
					</Link>
				</p>
			))}
		</>
	)
}

export default Posts
