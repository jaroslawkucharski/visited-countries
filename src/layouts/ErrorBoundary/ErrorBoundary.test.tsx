import { describe, it, render, waitFor } from 'utils/tests'

import { ErrorFallback } from './ErrorBoundary'

describe('layouts/ErrorBoundary', () => {
	it('should be in document', async () => {
		const { getByTestId } = render(<ErrorFallback />)

		waitFor(() => {
			expect(getByTestId('button-refresh')).toBeInTheDocument()
		})
	})
})
