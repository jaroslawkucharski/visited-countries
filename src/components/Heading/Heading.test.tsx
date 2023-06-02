import { describe, it, render, waitFor } from '../../utils/tests-utils'
import { Heading } from './Heading'

describe('components/Heading', () => {
	it('should be H1', async () => {
		const { getByTestId, container } = render(<Heading>Hello world</Heading>)

		await waitFor(() => {
			expect(getByTestId('heading')).toBeInTheDocument()
			expect(container.querySelector('h1')).toBeInTheDocument()
		})
	})

	it('should be H2', async () => {
		const { getByTestId, container } = render(<Heading level={2}>Hello world</Heading>)

		await waitFor(() => {
			expect(getByTestId('heading')).toBeInTheDocument()
			expect(container.querySelector('h2')).toBeInTheDocument()
		})
	})
})
