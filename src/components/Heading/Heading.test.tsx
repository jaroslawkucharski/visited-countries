import { describe, it, render, screen, vi, waitFor } from 'config/tests'

import { Heading } from './Heading'

describe('suite', () => {
	beforeAll(() => {
		Object.defineProperty(window, 'matchMedia', {
			writable: true,
			value: vi.fn().mockImplementation(query => ({
				matches: false,
				media: query,
				onchange: null,
				addListener: vi.fn(), // deprecated
				removeListener: vi.fn(), // deprecated
				addEventListener: vi.fn(),
				removeEventListener: vi.fn(),
				dispatchEvent: vi.fn(),
			})),
		})
	})

	it('serial test', () => {
		render(<Heading level={1}>fsdf</Heading>)
	})

	it('serial test', async () => {
		render(
			<Heading
				level={2}
				data-testid="spreader"
			>
				dasdad
			</Heading>,
		)

		await waitFor(() => {
			screen.debug(undefined, Infinity)
		})
	})
})
