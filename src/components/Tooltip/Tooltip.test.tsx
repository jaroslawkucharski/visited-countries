import { describe, it, render, waitFor } from '../../utils/tests-utils'
import { Tooltip } from './Tooltip'

describe('components/Tooltip', () => {
	it('should be in document', async () => {
		const { getByTestId } = render(<Tooltip content="I am tooltip.">Tooltip</Tooltip>)

		await waitFor(() => {
			expect(getByTestId('tooltip')).toBeInTheDocument()
		})
	})
})
