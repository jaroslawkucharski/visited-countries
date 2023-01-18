import { describe, it, render, waitFor } from 'utils/tests'

import App from './App'

describe('App', () => {
	it('firm submit', async () => {
		const { getByTestId } = render(<App />)

		await waitFor(() => {
			expect(getByTestId('form')).toBeInTheDocument()
		})
	})
})
