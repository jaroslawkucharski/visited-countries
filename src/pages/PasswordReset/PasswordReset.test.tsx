import { describe, it, render, userEvent, waitFor } from 'utils/tests'

import { PasswordReset } from './PasswordReset'

describe('components/PasswordReset', () => {
	it('form submit', async () => {
		const { getByTestId, getByLabelText } = render(<PasswordReset />)

		await waitFor(() => {
			expect(getByTestId('form')).toBeInTheDocument()
		})

		const user = userEvent.setup()

		await user.type(getByLabelText('Email'), 'mail@test.com')

		await user.click(getByTestId('button'))
	})
})
