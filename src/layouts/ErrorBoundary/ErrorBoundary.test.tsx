import { describe, it, render, waitFor } from 'utils/tests-utils'

import { ErrorBoundary } from './ErrorBoundary'

describe('layouts/ErrorBoundary', () => {
	it('should be in document', async () => {
		const { getByTestId } = render(<ErrorBoundary>Children</ErrorBoundary>)

		waitFor(() => {
			expect(getByTestId('button-refresh')).toBeInTheDocument()
		})
	})
})
