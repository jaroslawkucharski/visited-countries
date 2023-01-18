import { describe, it, render } from 'utils/tests'

import { DashboardList } from './DashboardList'

describe('pages/DashboardList', () => {
	it('should be in document', async () => {
		render(<DashboardList />)
	})
})
