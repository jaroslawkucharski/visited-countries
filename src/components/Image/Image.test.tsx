import { describe, it, render, vi, waitFor } from '../../utils/tests-utils'
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

	it('should have onClick', async () => {
		const { getByTestId } = render(
			<Image
				src="image-link"
				alt="image-alt"
				onClick={vi.fn()}
			/>,
		)

		await waitFor(() => {
			expect(getByTestId('image')).toBeInTheDocument()
		})
	})
})
