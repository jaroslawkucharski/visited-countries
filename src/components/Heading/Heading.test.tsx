import { render } from 'utils/tests'

import { Heading } from './Heading'

describe('components/Header', () => {
	it('should be H1', () => {
		const { getByTestId, container } = render(<Heading>Hello world</Heading>)

		expect(getByTestId('heading')).toBeInTheDocument()
		expect(container.querySelector('h1')).toBeInTheDocument()
	})

	it('should be H2', () => {
		const { getByTestId, container } = render(<Heading level={2}>Hello world</Heading>)

		expect(getByTestId('heading')).toBeInTheDocument()
		expect(container.querySelector('h2')).toBeInTheDocument()
	})
})
