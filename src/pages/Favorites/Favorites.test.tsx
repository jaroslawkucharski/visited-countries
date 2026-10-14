import { describe, it, render, waitFor } from 'utils/tests-utils'

import { Favorites } from './Favorites'

describe('pages/Favorites', () => {
	it('should be in document', async () => {
		const { getByText } = render(<Favorites />)

		await waitFor(() => {
			expect(getByText('Favorites')).toBeInTheDocument()
		})
	})
})
