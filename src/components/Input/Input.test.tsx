import { describe, fireEvent, it, render, vi, waitFor } from '../../utils/tests-utils'
import { Input } from './Input'

const onChange = vi.fn()

describe('components/Input', () => {
	it('should have label, name & id', async () => {
		const { getByTestId } = render(
			<Input
				label="label"
				name="input"
				id="input"
				onChange={onChange}
			/>,
		)

		await waitFor(() => {
			expect(getByTestId('input')).toBeInTheDocument()
			expect(getByTestId('input-label')).toBeInTheDocument()
		})
	})

	it('should have errors', async () => {
		const { getByTestId } = render(
			<Input
				label="label"
				name="input"
				id="input"
				onChange={onChange}
				errors={{ input: 'error' }}
				touched={{ input: true }}
			/>,
		)

		await waitFor(() => {
			expect(getByTestId('input')).toBeInTheDocument()
			expect(getByTestId('input-error')).toBeInTheDocument()
		})
	})

	it('should have full width', async () => {
		const { getByTestId } = render(
			<Input
				label="label"
				name="input"
				id="input"
				onChange={onChange}
				hasFullWidth
			/>,
		)

		await waitFor(() => {
			expect(getByTestId('input')).toBeInTheDocument()
		})
	})

	it('should be password', async () => {
		const { getByTestId } = render(
			<Input
				label="label"
				name="input"
				id="input"
				onChange={onChange}
				type="password"
			/>,
		)

		await waitFor(() => {
			expect(getByTestId('input')).toBeInTheDocument()
			expect(getByTestId('input-password')).toBeInTheDocument()

			fireEvent.click(getByTestId('input-password'))
		})
	})
})
