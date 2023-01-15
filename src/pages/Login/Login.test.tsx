import { describe, it, render } from 'utils/tests'

import { Login } from './Login'

describe('components/Login', () => {
	it('should be in document', async () => {
		render(<Login />)
	})
})
