import { describe, it, render } from 'utils/tests'

import { Link } from './Link'

describe('components/Link', () => {
	it('should be in document', () => {
		const { getByTestId } = render(<Link to="/">Click</Link>)

		expect(getByTestId('link')).toBeInTheDocument()
	})
})
