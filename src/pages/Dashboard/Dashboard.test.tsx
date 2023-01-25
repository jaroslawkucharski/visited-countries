import { describe, it, render, waitFor } from 'utils/tests'

import { Dashboard } from './Dashboard'

describe('pages/Dashboard', () => {
	it('should be in document', async () => {
		const { getByTestId } = render(<Dashboard />)

		await waitFor(() => {
			expect(getByTestId('loader')).toBeInTheDocument()
		})
	})
})
