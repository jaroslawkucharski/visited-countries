import { describe, it, render, userEvent, waitFor } from 'utils/tests'

import { Register } from './Register'

describe('pages/Register', () => {
	it('firm submit', async () => {
		const { getByTestId, getByLabelText } = render(<Register />)

		await waitFor(() => {
			expect(getByTestId('form')).toBeInTheDocument()
		})

		const user = userEvent.setup()

		await user.type(getByLabelText('Email'), 'mail@test.com')
		await user.type(getByLabelText('Password'), '1234')
		await user.type(getByLabelText('Confirm password'), '1234')

		await user.click(getByTestId('button'))
	})
})
