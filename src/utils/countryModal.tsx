import NiceModal from '@ebay/nice-modal-react'
import { Button, Paragraph, Spacer, VisitDateForm } from 'components'
import i18next from 'i18next'
import { ReactNode } from 'react'
import { HiHeart, HiOutlineHeart, HiTrash } from 'react-icons/hi2'

import { currentVisitedAt } from 'helpers/visitDate'

import { Modal } from '../components/Modal'
import { modalShow } from './modalShow'

interface CountryModalProps {
	icon?: string
	name?: string
	mode?: 'add' | 'edit'
	initialVisitedAt?: string | null
	onConfirm: (visitedAt: string | null) => void
	isFavorite?: boolean
	onToggleFavorite?: () => void
	onRemove?: () => void
}

const ModalActionButton = ({
	icon,
	label,
	onClick,
	testId,
}: {
	icon: ReactNode
	label: string
	onClick: () => void
	testId: string
}) => (
	<>
		<Spacer
			type="vertical"
			space="small"
		/>

		<Button
			variant="secondary"
			onClick={() => {
				onClick()
				NiceModal.remove(Modal)
			}}
			data-testid={testId}
			hasFullWidth
		>
			{icon}

			{label}
		</Button>
	</>
)

export const showCountryModal = ({
	icon = '',
	name = '',
	mode = 'add',
	initialVisitedAt,
	onConfirm,
	isFavorite = false,
	onToggleFavorite,
	onRemove,
}: CountryModalProps) => {
	let visitedAt = initialVisitedAt === undefined ? currentVisitedAt() : initialVisitedAt

	return modalShow({
		id: mode === 'add' ? 'add-country' : 'edit-country',
		title: i18next.t(mode === 'add' ? 'visit.date.title' : 'visit.date.edit'),
		subtitle: `${icon} ${name}`.trim(),
		content: (
			<>
				<Paragraph
					size="small"
					align="left"
				>
					{i18next.t('visit.date.description')}
				</Paragraph>

				<Spacer
					type="vertical"
					space="small"
				/>

				<VisitDateForm
					initialValue={visitedAt}
					onChange={value => {
						visitedAt = value
					}}
				/>

				{onToggleFavorite && (
					<ModalActionButton
						icon={isFavorite ? <HiHeart /> : <HiOutlineHeart />}
						label={String(i18next.t(isFavorite ? 'favorites.remove' : 'favorites.add'))}
						onClick={onToggleFavorite}
						testId="button-toggle-favorite"
					/>
				)}

				{onRemove && (
					<ModalActionButton
						icon={<HiTrash />}
						label={String(i18next.t('word.remove.country'))}
						onClick={onRemove}
						testId="button-remove-country"
					/>
				)}
			</>
		),
		actionName: i18next.t(mode === 'add' ? 'word.add' : 'word.save'),
		cancelName: i18next.t('word.cancel'),
		action: () => onConfirm(visitedAt),
	})
}
