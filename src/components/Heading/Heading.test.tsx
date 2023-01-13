import { describe, it, render, vi } from 'config/tests'

import { Heading } from './Heading'

describe('components/Heading', () => {
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

	it('should be H1', () => {
		const { getByTestId, container } = render(<Heading>Hello world</Heading>)

		expect(getByTestId('heading')).toBeInTheDocument()
		expect(container.querySelector('h1')).toBeInTheDocument()
	})

	it('should be H2', async () => {
		const { getByTestId, container } = render(<Heading level={2}>Hello world</Heading>)

		expect(getByTestId('heading')).toBeInTheDocument()
		expect(container.querySelector('h2')).toBeInTheDocument()
	})
})
