import { describe, it, render, waitFor } from 'utils/tests'

import { PageNotFound } from './PageNotFound'

describe('pages/PageNotFound', () => {
	it('should be in document', async () => {
		const { getByText } = render(<PageNotFound />)

		await waitFor(() => {
			expect(getByText('404')).toBeInTheDocument()
		})
	})
})
