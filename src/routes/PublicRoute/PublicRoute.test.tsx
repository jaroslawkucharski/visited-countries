import { describe, it, render } from 'utils/tests'

import { PublicRoute } from './PublicRoute'

describe('routes/PublicRoute', () => {
	it('should be in document', async () => {
		render(<PublicRoute component={<p>Hello!</p>} />)
	})
})
