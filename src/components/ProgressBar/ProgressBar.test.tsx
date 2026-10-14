import { describe, it, render, waitFor } from 'utils/tests-utils'
import { expect } from 'vitest'

import { ProgressBar } from './ProgressBar'

describe('components/ProgressBar', () => {
	it('renders progress using the provided value and limit', async () => {
		const { container } = render(
			<ProgressBar
				value={25}
				limit={50}
			/>,
		)

		await waitFor(() => expect(container.querySelector('.bar')).toBeInTheDocument())
	})

	it('caps progress at 100 percent', async () => {
		const { container } = render(
			<ProgressBar
				value={150}
				limit={100}
			/>,
		)

		await waitFor(() => expect(container.querySelector('.bar')).toBeInTheDocument())
	})
})
