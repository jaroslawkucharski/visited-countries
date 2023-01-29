import { describe, it, render, screen, waitFor } from 'utils/tests-utils'

import { PublicRoute } from './PublicRoute'

describe('routes/PublicRoute', () => {
	it('should be in document', async () => {
		const { getByText } = render(<PublicRoute component={<p>Hello!</p>} />)

		await waitFor(() => {
			expect(getByText('Hello!')).toBeInTheDocument()
		})
	})
})
