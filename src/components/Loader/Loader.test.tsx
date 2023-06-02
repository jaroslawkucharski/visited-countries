import { describe, it, render, waitFor } from '../../utils/tests-utils'
import { Loader } from './Loader'

describe('components/Loader', () => {
	it('should be type button', async () => {
		const { getByTestId } = render(<Loader />)

		await waitFor(() => {
			expect(getByTestId('loader')).toBeInTheDocument()
		})
	})

	it('should be type website', async () => {
		const { getByTestId } = render(<Loader type="website" />)

		await waitFor(() => {
			expect(getByTestId('loader')).toBeInTheDocument()
		})
	})
})
