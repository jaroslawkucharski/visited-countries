import NiceModal from '@ebay/nice-modal-react'

import { describe, fireEvent, it, render, vi, waitFor } from '../../utils/tests-utils'
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
				action={vi.fn()}
			/>,
		)

		await waitFor(() => {
			NiceModal.show(Modal)

			expect(getByTestId('modal')).toBeInTheDocument()
		})
	})
})

describe('components/Modal accessibility', () => {
	it('should be a labelled dialog closed with Escape', async () => {
		const { findByRole, queryByRole } = render(<div />)

		NiceModal.show(Modal, {
			id: 'a11y-modal',
			title: 'Dialog title',
			content: 'Content',
			actionName: 'Save',
			cancelName: 'Cancel',
			action: vi.fn(),
		})

		const dialog = await findByRole('dialog', { name: 'Dialog title' })

		expect(dialog).toHaveAttribute('aria-modal', 'true')

		fireEvent.keyDown(document, { key: 'Escape' })

		await waitFor(() => {
			expect(queryByRole('dialog')).not.toBeInTheDocument()
		})
	})
})
