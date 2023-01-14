import { describe, it, render } from 'utils/tests'

import { Paragraph } from './Paragraph'

describe('components/Paragraph', () => {
	it('should be in document', () => {
		const { getByTestId } = render(<Paragraph>Text</Paragraph>)

		expect(getByTestId('paragraph')).toBeInTheDocument()
	})
})
