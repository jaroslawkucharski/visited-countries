import { describe, it, render } from 'utils/tests'

import { Dashboard } from './Dashboard'

describe('components/Dashboard', () => {
	it('should be in document', async () => {
		render(<Dashboard />)
	})
})
