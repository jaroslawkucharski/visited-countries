import { HiCheckBadge } from 'react-icons/hi2'

import { describe, it, render, waitFor } from '../../utils/tests-utils'
import { Button } from './Button'

describe('components/Button', () => {
	it('should be variant primary', async () => {
		const { getByTestId } = render(<Button>Click</Button>)

		await waitFor(() => {
			expect(getByTestId('button')).toBeInTheDocument()
		})
	})

	it('should be loading', async () => {
		const { getByTestId } = render(<Button isLoading>Click</Button>)

		await waitFor(() => {
			expect(getByTestId('button-loader')).toBeInTheDocument()
		})
	})

	it('should have full width', async () => {
		const { getByTestId } = render(<Button hasFullWidth>Click</Button>)

		await waitFor(() => {
			expect(getByTestId('button')).toBeInTheDocument()
		})
	})

	it('should have only icon', async () => {
		const { getByTestId } = render(
			<Button hasOnlyIcon>
				<HiCheckBadge />
			</Button>,
		)

		await waitFor(() => {
			expect(getByTestId('button')).toBeInTheDocument()
		})
	})

	it('should be dropdown', async () => {
		const { getByTestId } = render(<Button isDropdown>Click</Button>)

		await waitFor(() => {
			expect(getByTestId('button')).toBeInTheDocument()
		})
	})
})
