import { describe, it, render } from 'utils/tests'

import { Dashboard } from './Dashboard'

describe('pages/Dashboard', () => {
	it('should be in document', async () => {
		render(<Dashboard />)
	})
})
