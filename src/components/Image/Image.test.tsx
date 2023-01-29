import { describe, it, render, waitFor } from 'utils/tests-utils'

import { Image } from './Image'

describe('components/Image', () => {
	it('should have src & alt', async () => {
		const { getByTestId } = render(
			<Image
				src="image-link"
				alt="image-alt"
			/>,
		)

		await waitFor(() => {
			expect(getByTestId('image')).toBeInTheDocument()
		})
	})
})
