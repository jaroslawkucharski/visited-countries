import { describe, it, render, waitFor } from 'utils/tests'

import { Menu } from './Menu'

describe('layouts/Menu', () => {
	it('should be in document', async () => {
		const { getByTestId } = render(<Menu />)

		waitFor(() => {
			expect(getByTestId('loader')).toBeInTheDocument()
		})
	})
})
