import { describe, it, render, waitFor } from 'utils/tests'

import { TopBar } from './TopBar'

describe('layouts/TopBar', () => {
	it('should be in document', async () => {
		const { getByTestId } = render(<TopBar />)

		await waitFor(() => {
			expect(getByTestId('button-signin')).toBeInTheDocument()
			expect(getByTestId('button-signup')).toBeInTheDocument()
		})
	})
})
