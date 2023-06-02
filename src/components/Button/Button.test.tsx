import { render, waitFor } from 'utils/tests-utils'

import { Button } from './Button'

describe('components/Button', () => {
	it('it should render', async () => {
		const { getByTestId } = render(<Button>Button</Button>)

		await waitFor(() => {
			expect(getByTestId('button')).toBeInTheDocument()
		})
	})

	it('should have full width', async () => {
		const { getByTestId } = render(<Button hasFullWidth>Button</Button>)

		await waitFor(() => {
			expect(getByTestId('button')).toBeInTheDocument()
		})
	})

	it('should have secondary variant', async () => {
		const { getByTestId } = render(<Button variant="secondary">Button</Button>)

		await waitFor(() => {
			expect(getByTestId('button')).toBeInTheDocument()
		})
	})

	it('it should load ', async () => {
		const { getByTestId } = render(<Button isLoading>Button</Button>)

		await waitFor(() => {
			expect(getByTestId('button')).toBeInTheDocument()
		})
	})

	it('it should load and have secondary variant', async () => {
		const { getByTestId } = render(
			<Button
				variant="secondary"
				isLoading
			>
				Button
			</Button>,
		)

		await waitFor(() => {
			expect(getByTestId('button')).toBeInTheDocument()
		})
	})
})
