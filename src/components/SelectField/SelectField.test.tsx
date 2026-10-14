import { describe, fireEvent, it, render, vi } from 'utils/tests-utils'

import { SelectField } from './SelectField'

describe('components/SelectField', () => {
	it('should render a labelled select and report changes', async () => {
		const onChange = vi.fn()

		const { findByLabelText } = render(
			<SelectField
				label="Year"
				value="2026"
				options={[
					{ value: '2026', label: '2026' },
					{ value: '2025', label: '2025' },
				]}
				onChange={onChange}
			/>,
		)

		fireEvent.change(await findByLabelText('Year'), { target: { value: '2025' } })

		expect(onChange).toHaveBeenCalledWith('2025')
	})
})
