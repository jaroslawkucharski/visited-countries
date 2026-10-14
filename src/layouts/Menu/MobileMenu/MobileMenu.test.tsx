import { describe, it, render, screen, waitFor } from 'utils/tests-utils'
import { expect } from 'vitest'

import { MobileMenu } from './MobileMenu'

describe('layouts/MobileMenu', () => {
	it('renders navigation links', async () => {
		render(<MobileMenu />)

		await waitFor(() => expect(screen.getByRole('navigation')).toBeInTheDocument())
		expect(screen.getByLabelText('Map')).toBeInTheDocument()
		expect(screen.getByLabelText('Your list')).toBeInTheDocument()
		expect(screen.getByLabelText('Your profile')).toBeInTheDocument()
	})
})
