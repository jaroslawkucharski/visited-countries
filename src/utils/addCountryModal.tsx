import { Paragraph, Spacer, VisitDateForm, toVisitedAt } from 'components'
import i18next from 'i18next'

import { modalShow } from './modalShow'

interface AddCountryModalProps {
	icon?: string
	name?: string
	onConfirm: (visitedAt: string | null) => void
}

// Asks for an (optional) visit date before adding a country
export const showAddCountryModal = ({ icon = '', name = '', onConfirm }: AddCountryModalProps) => {
	const now = new Date()
	let visitedAt = toVisitedAt(
		String(now.getFullYear()),
		String(now.getMonth() + 1).padStart(2, '0'),
	)

	return modalShow({
		id: 'add-country',
		title: i18next.t('visit.date.title'),
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
					onChange={value => {
						visitedAt = value
					}}
				/>
			</>
		),
		actionName: i18next.t('word.add'),
		cancelName: i18next.t('word.cancel'),
		action: () => onConfirm(visitedAt),
	})
}
