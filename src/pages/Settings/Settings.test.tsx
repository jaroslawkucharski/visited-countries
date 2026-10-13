import { describe, it, render, waitFor } from 'utils/tests-utils'

import { Settings } from './Settings'

describe('pages/Settings', () => {
	it('should be in document', async () => {
		const { getByText, getByTestId } = render(<Settings />)

		await waitFor(() => {
			expect(getByText('Settings')).toBeInTheDocument()
			expect(getByTestId('theme-dark')).toBeInTheDocument()
			expect(getByTestId('language-en')).toBeInTheDocument()
		})
	})
})
