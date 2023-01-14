import { describe, it, render } from 'utils/tests'

import { Spacer } from './Spacer'

describe('components/Spacer', () => {
	it('should be type horizontal', () => {
		const { getByTestId } = render(<Spacer />)

		expect(getByTestId('spacer')).toBeInTheDocument()
	})

	it('should be type vertical', () => {
		const { getByTestId } = render(<Spacer type="vertical" />)

		expect(getByTestId('spacer')).toBeInTheDocument()
	})
})
