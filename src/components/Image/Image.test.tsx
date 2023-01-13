import { describe, it, render } from 'utils/tests'

import { Image } from './Image'

describe('components/Image', () => {
	it('should have src & alt', () => {
		const { getByTestId } = render(
			<Image
				src="image-link"
				alt="image-alt"
			/>,
		)

		expect(getByTestId('image')).toBeInTheDocument()
	})
})
