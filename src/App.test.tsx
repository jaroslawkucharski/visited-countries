import { describe, it, render, waitFor } from 'utils/tests-utils'

import App from './App'

describe('App', () => {
	it('should be in document', async () => {
		const { getByTestId } = render(<App />)

		await waitFor(() => {
			expect(getByTestId('loader')).toBeInTheDocument()
		})
	})
})
