import NiceModal, { NiceModalHocProps } from '@ebay/nice-modal-react'
import { ReactNode } from 'react'

import { Modal } from '../components/Modal'

export type ModalShowProps = {
	title: string
	subtitle?: string
	content: ReactNode
	variant?: 'primary' | 'secondary' | 'alert'
	action: () => void
	actionName: string
	cancelName: string
} & NiceModalHocProps

export const modalShow = ({
	title,
	subtitle = '',
	content,
	actionName,
	cancelName,
	variant = 'primary',
	action,
	...modalProps
}: ModalShowProps) =>
	NiceModal.show(Modal, {
		title,
		subtitle,
		content,
		actionName,
		cancelName,
		variant,
		action,
		...modalProps,
	})
