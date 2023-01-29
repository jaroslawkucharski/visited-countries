import { describe, fireEvent, it, render, waitFor } from 'utils/tests-utils'

import { Select } from './Select'

describe('components/Select', () => {
	it('should be in the document', async () => {
		const { getByTestId } = render(<Select options={[{ name: 'name', icon: 'icon' }]} />)

		await waitFor(() => {
			expect(getByTestId('select')).toBeInTheDocument()

			expect(getByTestId('select-icon-search')).toBeInTheDocument()

			expect(getByTestId('select-input')).toBeInTheDocument()

			fireEvent.click(getByTestId('select-input'))

			expect(getByTestId('select-item')).toBeInTheDocument()

			fireEvent.click(getByTestId('select-item'))

			expect(getByTestId('select-input')).toHaveValue('name')
		})
	})

	it('should display empty message', async () => {
		const { getByTestId } = render(<Select options={[]} />)

		await waitFor(() => {
			expect(getByTestId('select')).toBeInTheDocument()

			expect(getByTestId('select-input')).toBeInTheDocument()

			fireEvent.click(getByTestId('select-input'))

			expect(getByTestId('select-empty-message')).toBeInTheDocument()
		})
	})

	it('clear value', async () => {
		const { getByTestId } = render(<Select options={[{ name: 'name', icon: 'icon' }]} />)

		await waitFor(() => {
			expect(getByTestId('select')).toBeInTheDocument()

			expect(getByTestId('select-input')).toBeInTheDocument()

			fireEvent.click(getByTestId('select-input'))

			expect(getByTestId('select-icon-clear')).toBeInTheDocument()

			fireEvent.click(getByTestId('select-icon-clear'))

			expect(getByTestId('select-input')).toHaveValue('')
		})
	})

	it('search values', async () => {
		const { getByTestId } = render(<Select options={[{ name: 'name', icon: 'icon' }]} />)

		await waitFor(() => {
			expect(getByTestId('select')).toBeInTheDocument()

			expect(getByTestId('select-input')).toBeInTheDocument()

			fireEvent.click(getByTestId('select-input'))

			fireEvent.change(getByTestId('select-input'), { target: { value: 'name' } })

			expect(getByTestId('select-input')).toHaveValue('name')

			fireEvent.change(getByTestId('select-input'), { target: { value: '' } })

			expect(getByTestId('select-input')).toHaveValue('')
		})
	})

	it('should have full width', async () => {
		const { getByTestId } = render(
			<Select
				options={[{ name: 'name', icon: 'icon' }]}
				hasFullWidth
			/>,
		)

		await waitFor(() => {
			expect(getByTestId('select')).toBeInTheDocument()
		})
	})
})
