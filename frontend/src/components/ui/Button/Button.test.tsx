import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import { Button } from './Button'

describe('loads and displays greeting', async () => {
	it('test', () => {
		render(<Button action={() => null}>Button</Button>)
	})
})
