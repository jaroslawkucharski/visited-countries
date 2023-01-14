import { describe, it, render } from 'utils/tests'

import { Break } from './Break'

describe('components/Break', () => {
	it('should be in document', () => {
		const { getByTestId } = render(<Break />)

		expect(getByTestId('break')).toBeInTheDocument()
	})
})
