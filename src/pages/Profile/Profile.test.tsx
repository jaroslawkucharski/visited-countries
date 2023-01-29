import { describe, it, render, waitFor } from 'utils/tests-utils'

import { Profile } from './Profile'

describe('pages/Profile', () => {
	it('should be in document', async () => {
		const { getByText } = render(<Profile />)

		await waitFor(() => {
			expect(getByText('Your profile')).toBeInTheDocument()
		})
	})
})
