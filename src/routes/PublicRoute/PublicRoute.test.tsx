import { describe, it, render, waitFor } from 'utils/tests'

import { PublicRoute } from './PublicRoute'

describe('routes/PublicRoute', () => {
	it('should be in document', async () => {
		const { getByTestId } = render(<PublicRoute component={<p>Hello!</p>} />)

		await waitFor(() => {
			expect(getByTestId('loader')).toBeInTheDocument()
		})
	})
})
