import { describe, it, render } from 'utils/tests'

import { Button } from './Button'

describe('components/Button', () => {
	it('should be primary', () => {
		const { getByTestId } = render(<Button>Click</Button>)

		expect(getByTestId('button')).toBeInTheDocument()
	})
})
