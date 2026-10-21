import NiceModal, { NiceModalHocProps, useModal } from '@ebay/nice-modal-react'
import { FC, MouseEvent, ReactNode, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { HiXCircle } from 'react-icons/hi2'

import { useFocusTrap } from 'hooks/useFocusTrap'

import { Button } from '../Button'
import { Heading } from '../Heading'
import { Paragraph } from '../Paragraph'
import { Spacer } from '../Spacer'
import {
	ModalActionsComponent,
	ModalComponent,
	ModalContainerComponent,
	ModalContentComponent,
	ModalHeadingComponent,
} from './Modal.styles'

export interface ModalProps {
	id: string
	title: string
	subtitle?: string
	content: ReactNode
	variant?: 'primary' | 'secondary' | 'alert'
	action: () => void
	actionName: string
	cancelName: string
	'data-testid'?: string
}

export const Modal: FC<ModalProps & NiceModalHocProps> = NiceModal.create(
	({
		id,
		title,
		subtitle = '',
		content,
		variant = 'primary',
		action,
		actionName,
		cancelName,
		'data-testid': dataTestId = 'modal',
	}) => {
		const { t } = useTranslation()
		const modal = useModal()
		const dialogRef = useRef<HTMLDivElement>(null)

		const closeModal = () => modal.remove()

		useFocusTrap(dialogRef, closeModal)

		const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) =>
			event.target === event.currentTarget && closeModal()

		const handleAction = () => {
			action()
			closeModal()
		}

		return (
			<ModalContainerComponent
				id={id}
				data-testid={dataTestId}
				onClick={handleBackdropClick}
			>
				<ModalComponent
					ref={dialogRef}
					role="dialog"
					aria-modal="true"
					aria-labelledby={`${id}-title`}
					tabIndex={-1}
				>
					<ModalHeadingComponent>
						<div>
							<Heading
								level={3}
								align="left"
								id={`${id}-title`}
							>
								{title}
							</Heading>

							{subtitle && (
								<>
									<Spacer
										type="vertical"
										space="tiny"
									/>

									<Paragraph type="label">{subtitle}</Paragraph>
								</>
							)}
						</div>

						<button
							type="button"
							onClick={closeModal}
							className="close-icon"
							aria-label={String(t('word.close'))}
							data-testid="modal-close"
						>
							<HiXCircle aria-hidden />
						</button>
					</ModalHeadingComponent>

					<Spacer type="vertical" />

					<ModalContentComponent>{content}</ModalContentComponent>

					<Spacer
						type="vertical"
						space="large"
					/>

					<ModalActionsComponent>
						<Button
							variant="secondary"
							onClick={closeModal}
						>
							{cancelName}
						</Button>

						<Button
							variant={variant}
							onClick={handleAction}
						>
							{actionName}
						</Button>
					</ModalActionsComponent>
				</ModalComponent>
			</ModalContainerComponent>
		)
	},
)
