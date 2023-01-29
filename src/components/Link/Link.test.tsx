import { describe, it, render, waitFor } from 'utils/tests-utils'

import { Link } from './Link'

describe('components/Link', () => {
	it('should be in document', async () => {
		const { getByTestId } = render(<Link to="/">Click</Link>)

		await waitFor(() => {
			expect(getByTestId('link')).toBeInTheDocument()
		})
	})
})
