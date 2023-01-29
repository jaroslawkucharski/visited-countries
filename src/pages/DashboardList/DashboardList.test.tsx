import { describe, it, render, waitFor } from 'utils/tests-utils'

import { DashboardList } from './DashboardList'

describe('pages/DashboardList', () => {
	it('should be in document', async () => {
		const { getByTestId } = render(<DashboardList />)

		await waitFor(() => {
			expect(getByTestId('heading')).toBeInTheDocument()
		})
	})
})
