import NiceModal from '@ebay/nice-modal-react'
import { Button, Paragraph, Spacer, VisitDateForm, currentVisitedAt } from 'components'
import i18next from 'i18next'
import { HiHeart, HiOutlineHeart } from 'react-icons/hi2'

import { Modal } from '../components/Modal'
import { modalShow } from './modalShow'

interface VisitDateModalProps {
	icon?: string
	name?: string
	// "edit" changes the date of an already visited country
	mode?: 'add' | 'edit'
	initialVisitedAt?: string | null
	onConfirm: (visitedAt: string | null) => void
	// when provided, the modal also offers adding / removing the country from favorites
	isFavorite?: boolean
	onToggleFavorite?: () => void
}

// Asks for an (optional) visit date before adding a country or when changing it
export const showAddCountryModal = ({
	icon = '',
	name = '',
	mode = 'add',
	initialVisitedAt,
	onConfirm,
	isFavorite = false,
	onToggleFavorite,
}: VisitDateModalProps) => {
	let visitedAt = initialVisitedAt === undefined ? currentVisitedAt() : initialVisitedAt

	const handleToggleFavorite = () => {
		onToggleFavorite?.()
		NiceModal.remove(Modal)
	}

	return modalShow({
		id: mode === 'add' ? 'add-country' : 'edit-visit-date',
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
					<>
						<Spacer
							type="vertical"
							space="small"
						/>

						<Button
							variant="secondary"
							onClick={handleToggleFavorite}
							data-testid="button-toggle-favorite"
							hasFullWidth
						>
							{isFavorite ? <HiHeart /> : <HiOutlineHeart />}

							{i18next.t(isFavorite ? 'favorites.remove' : 'favorites.add')}
						</Button>
					</>
				)}
			</>
		),
		actionName: i18next.t(mode === 'add' ? 'word.add' : 'word.save'),
		cancelName: i18next.t('word.cancel'),
		action: () => onConfirm(visitedAt),
	})
}
