import { describe, it, render } from 'utils/tests'

import { PrivateRoute } from './PrivateRoute'

describe('components/PrivateRoute', () => {
	it('should be in document', async () => {
		render(<PrivateRoute component={<p>Hello!</p>} />)
	})
})
