import { describe, it, render, waitFor } from 'utils/tests-utils'

import { Spacer } from './Spacer'

describe('components/Spacer', () => {
	it('should be type horizontal', async () => {
		const { getByTestId } = render(<Spacer />)

		await waitFor(() => {
			expect(getByTestId('spacer')).toBeInTheDocument()
		})
	})

	it('should be type vertical', async () => {
		const { getByTestId } = render(<Spacer type="vertical" />)

		await waitFor(() => {
			expect(getByTestId('spacer')).toBeInTheDocument()
		})
	})
})
