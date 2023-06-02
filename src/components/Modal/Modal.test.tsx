import NiceModal from '@ebay/nice-modal-react'

import { describe, it, render, vi, waitFor } from '../../utils/tests-utils'
import { Modal } from './Modal'

describe('components/Modal', () => {
	it('should be in document', async () => {
		const { getByTestId } = render(
			<Modal
				id="modal"
				title="Tile"
				content="Content"
				actionName="Remove"
				cancelName="Cancel"
				action={() => vi.fn()}
			/>,
		)

		await waitFor(() => {
			NiceModal.show(Modal)

			expect(getByTestId('modal')).toBeInTheDocument()
		})
	})
})
