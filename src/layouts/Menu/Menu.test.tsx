import { describe, it, render } from 'utils/tests'

import { Menu } from './Menu'

describe('components/Menu', () => {
	it('should be in document', async () => {
		render(<Menu />)
	})
})
