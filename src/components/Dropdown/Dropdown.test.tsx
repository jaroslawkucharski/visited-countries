import { describe, fireEvent, it, render } from 'utils/tests'

import { Dropdown } from './Dropdown'
import { DropdownItem } from './DropdownItem'

describe('components/Dropdown', () => {
	it('should be ', () => {
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
					isLastItem
				>
					Click me 2
				</DropdownItem>
			</Dropdown>,
		)

		expect(getByTestId('dropdown')).toBeInTheDocument()

		fireEvent.click(getByTestId('dropdown'))

		expect(getByTestId('item1')).toBeInTheDocument()
		expect(getByTestId('item2')).toBeInTheDocument()
	})
})
