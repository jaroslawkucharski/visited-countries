import { describe, it, render } from 'utils/tests'

import { Loader } from './Loader'

describe('components/Loader', () => {
	it('should be type button', () => {
		const { getByTestId } = render(<Loader />)

		expect(getByTestId('loader')).toBeInTheDocument()
	})

	it('should be type website', () => {
		const { getByTestId } = render(<Loader type="website" />)

		expect(getByTestId('loader')).toBeInTheDocument()
	})
})
