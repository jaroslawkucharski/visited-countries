import { describe, it, render } from 'utils/tests'

import { Profile } from './Profile'

describe('components/Profile', () => {
	it('should be in document', async () => {
		render(<Profile />)
	})
})
