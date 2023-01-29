import { describe, fireEvent, it, render, waitFor } from 'utils/tests-utils'

import { Dropdown } from './Dropdown'
import { DropdownItem } from './DropdownItem'

describe('components/Dropdown', () => {
	it('should be in the document', async () => {
		const { getByTestId } = render(
			<Dropdown text="Drop me">
				<DropdownItem
					to="/1"
					data-testid="item1"
				>
					Click me 1
				</DropdownItem>
				<DropdownItem
					to="/2"
					data-testid="item2"
					islastitem={true}
				>
					Click me 2
				</DropdownItem>
			</Dropdown>,
		)

		await waitFor(() => {
			expect(getByTestId('dropdown')).toBeInTheDocument()

			fireEvent.click(getByTestId('dropdown'))

			expect(getByTestId('item1')).toBeInTheDocument()
			expect(getByTestId('item2')).toBeInTheDocument()
		})
	})
})
