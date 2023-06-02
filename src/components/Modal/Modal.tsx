import NiceModal, { NiceModalHocProps, useModal } from '@ebay/nice-modal-react'
import { FC, ReactNode } from 'react'
import { HiXCircle } from 'react-icons/hi2'

import { Button } from '../Button'
import { Heading } from '../Heading'
import { Paragraph } from '../Paragraph'
import { Spacer } from '../Spacer'
import {
	ModalActionsComponent,
	ModalComponent,
	ModalContainerComponent,
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
		const modal = useModal()

		const closeModal = () => modal.remove()

		const handleAction = () => {
			action()
			closeModal()
		}

		return (
			<ModalContainerComponent
				id={id}
				data-testid={dataTestId}
			>
				<ModalComponent>
					<ModalHeadingComponent>
						<div>
							<Heading
								level={3}
								align="left"
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

						<HiXCircle
							onClick={closeModal}
							className="close-icon"
						/>
					</ModalHeadingComponent>

					<Spacer type="vertical" />

					<div>{content}</div>

					<Spacer
						type="vertical"
						space="large"
					/>

					<ModalActionsComponent>
						<Button
							variant="secondary"
							action={closeModal}
						>
							{cancelName}
						</Button>

						<Button
							variant={variant}
							action={handleAction}
						>
							{actionName}
						</Button>
					</ModalActionsComponent>
				</ModalComponent>
			</ModalContainerComponent>
		)
	},
)
