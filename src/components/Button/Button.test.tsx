import { HiCheckBadge } from 'react-icons/hi2'
import { describe, it, render } from 'utils/tests'

import { Button } from './Button'

describe('components/Button', () => {
	it('should be variant primary', () => {
		const { getByTestId } = render(<Button>Click</Button>)

		expect(getByTestId('button')).toBeInTheDocument()
	})

	it('should be loading', () => {
		const { getByTestId } = render(<Button isLoading>Click</Button>)

		expect(getByTestId('button-loader')).toBeInTheDocument()
	})

	it('should have full width', () => {
		const { getByTestId } = render(<Button hasFullWidth>Click</Button>)

		expect(getByTestId('button')).toBeInTheDocument()
	})

	it('should have only icon', () => {
		const { getByTestId } = render(
			<Button hasOnlyIcon>
				<HiCheckBadge />
			</Button>,
		)

		expect(getByTestId('button')).toBeInTheDocument()
	})

	it('should be dropdown', () => {
		const { getByTestId } = render(<Button isDropdown>Click</Button>)

		expect(getByTestId('button')).toBeInTheDocument()
	})
})
