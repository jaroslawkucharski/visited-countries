import { describe, it, render, waitFor } from 'utils/tests-utils'

import { IconBadge } from './IconBadge'

describe('components/IconBadge', () => {
	it('should show the count only when it is greater than zero', async () => {
		const { findByTestId, rerender, queryByText } = render(
			<IconBadge
				icon="♥"
				count={3}
				data-testid="badge"
			/>,
		)

		expect(await findByTestId('badge')).toHaveTextContent('3')

		rerender(
			<IconBadge
				icon="♥"
				count={0}
				data-testid="badge"
			/>,
		)

		await waitFor(() => expect(queryByText('0')).not.toBeInTheDocument())
	})
})
