import { describe, fireEvent, it, render, vi } from 'utils/tests'

import { Input } from './Input'

const onChange = vi.fn()

describe('components/Input', () => {
	it('should have label, name & id', () => {
		const { getByTestId } = render(
			<Input
				label="label"
				name="input"
				id="input"
				onChange={onChange}
			/>,
		)

		expect(getByTestId('input')).toBeInTheDocument()
		expect(getByTestId('input-label')).toBeInTheDocument()
	})

	it('should have errors', () => {
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

		expect(getByTestId('input')).toBeInTheDocument()
		expect(getByTestId('input-error')).toBeInTheDocument()
	})

	it('should have full width', () => {
		const { getByTestId } = render(
			<Input
				label="label"
				name="input"
				id="input"
				onChange={onChange}
				hasFullWidth
			/>,
		)

		expect(getByTestId('input')).toBeInTheDocument()
	})

	it('should be password', () => {
		const { getByTestId } = render(
			<Input
				label="label"
				name="input"
				id="input"
				onChange={onChange}
				type="password"
			/>,
		)

		expect(getByTestId('input')).toBeInTheDocument()
		expect(getByTestId('input-password')).toBeInTheDocument()

		fireEvent.click(getByTestId('input-password'))
	})
})
