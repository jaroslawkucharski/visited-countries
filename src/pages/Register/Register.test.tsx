import { describe, it, render } from 'utils/tests'

import { Register } from './Register'

describe('components/Register', () => {
	it('should be in document', async () => {
		render(<Register />)
	})
})
