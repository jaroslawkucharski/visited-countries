import { describe, it, render, userEvent, waitFor } from 'utils/tests'

import { Login } from './Login'

describe('components/Login', () => {
	it('form submit', async () => {
		const { getByTestId, getByLabelText } = render(<Login />)

		await waitFor(() => {
			expect(getByTestId('form')).toBeInTheDocument()
		})

		const user = userEvent.setup()

		await user.type(getByLabelText('Email'), 'mail@test.com')
		await user.type(getByLabelText('Password'), '1234')

		await user.click(getByTestId('button'))
	})
})
