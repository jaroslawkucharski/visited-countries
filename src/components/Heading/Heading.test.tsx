import { render } from 'utils/tests'

import { Heading } from './Heading'

describe('components/Header', () => {
	it('should be H1', () => {
		const { getByTestId } = render(<Heading>Hello world</Heading>)

		expect(getByTestId('heading')).toBeInTheDocument()
	})

	it('should be H2', () => {
		const { getByTestId } = render(<Heading level={2}>Hello world</Heading>)

		expect(getByTestId('heading')).toBeInTheDocument()
	})
})
