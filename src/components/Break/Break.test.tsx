import { describe, it, render, waitFor } from '../../utils/tests-utils'
import { Break } from './Break'

describe('components/Break', () => {
	it('should be in document', async () => {
		const { getByTestId } = render(<Break />)

		await waitFor(() => {
			expect(getByTestId('break')).toBeInTheDocument()
		})
	})
})
