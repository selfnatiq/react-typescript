interface Props<T> {
	values: T
	children: (values: T) => JSX.Element
}

const Title = <T,>({ values, children }: Props<T>) => children(values)

export default Title
