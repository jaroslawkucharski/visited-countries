import { describe, it, render, waitFor } from 'utils/tests'

import { PrivateRoute } from './PrivateRoute'

describe('routes/PrivateRoute', () => {
	it('should be in document', async () => {
		const { getByTestId } = render(<PrivateRoute component={<p>Hello!</p>} />)

		await waitFor(() => {
			expect(getByTestId('loader')).toBeInTheDocument()
		})
	})
})
