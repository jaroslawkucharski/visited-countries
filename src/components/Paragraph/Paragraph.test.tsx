import { describe, it, render, waitFor } from '../../utils/tests-utils'
import { Paragraph } from './Paragraph'

describe('components/Paragraph', () => {
	it('should be in document', async () => {
		const { getByTestId } = render(<Paragraph>Text</Paragraph>)

		await waitFor(() => {
			expect(getByTestId('paragraph')).toBeInTheDocument()
		})
	})
})
