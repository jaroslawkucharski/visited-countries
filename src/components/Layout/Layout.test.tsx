import { describe, it, render, waitFor } from '../../utils/tests-utils'
import { Layout } from './Layout'

describe('components/Layout', () => {
	it('should be in the document', async () => {
		const { getByTestId } = render(<Layout>Test</Layout>)

		await waitFor(() => {
			expect(getByTestId('layout')).toBeInTheDocument()
		})
	})
})
