import { describe, it, render, screen, userEvent, vi, waitFor } from 'utils/tests-utils'
import { expect } from 'vitest'

import { VisitDateForm } from './VisitDateForm'

describe('components/VisitDateForm', () => {
	it('renders selected month and year', async () => {
		render(
			<VisitDateForm
				initialValue="2020-03"
				onChange={vi.fn()}
			/>,
		)

		await waitFor(() => expect(screen.getByTestId('visit-date-month')).toHaveValue('03'))
		expect(screen.getByTestId('visit-date-year')).toHaveValue('2020')
	})

	it('notifies when the month changes', async () => {
		const onChange = vi.fn()
		const user = userEvent.setup()

		render(
			<VisitDateForm
				initialValue="2020-03"
				onChange={onChange}
			/>,
		)

		await waitFor(() => expect(screen.getByTestId('visit-date-month')).toBeInTheDocument())
		await user.selectOptions(screen.getByTestId('visit-date-month'), '04')

		expect(onChange).toHaveBeenCalledWith('2020-04')
	})
})
