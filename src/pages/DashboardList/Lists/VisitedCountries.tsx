import { Paragraph, Spacer, modalShow } from '@jaroslaw91/novelui'
import { useCountriesListContext } from 'context/CountriesListContext'
import { useTranslation } from 'react-i18next'
import { HiTrash } from 'react-icons/hi2'
import { removeCountry } from 'services/user'
import { v4 as uuid } from 'uuid'

import { useService } from 'hooks/useService'

import { LOCALES } from 'constants/locales'

import { IconComponent, ListItemComponent } from '../DashboardList.styles'

export const VisitedCountries = () => {
	const { t, i18n } = useTranslation()

	const { visitedList, fetchCountriesList } = useCountriesListContext()

	const { request: removeRequest } = useService({
		service: removeCountry,
		successToast: t('toasts.remove.country'),
	})

	const handleRemoveCountry = (uid: string) => {
		removeRequest(uid)

		fetchCountriesList()
	}

	const showRemoveModal = (uid: string, country: string) => {
		modalShow({
			id: 'remove-country',
			title: t('modal.remove.country'),
			content: t('modal.remove.country.content', { country }),
			actionName: t('word.remove'),
			cancelName: t('word.cancel'),
			action: () => handleRemoveCountry(uid),
			variant: 'alert',
		})
	}

	return (
		<>
			<Paragraph size="big">Your visited list:</Paragraph>

			<Spacer
				type="vertical"
				space="tiny"
			/>

			<ul>
				{visitedList.map(country => {
					const name = i18n.language === LOCALES.EN ? country?.nameEN : country?.namePL

					return (
						<ListItemComponent key={uuid()}>
							{`${country?.icon} `}

							{name}

							<Spacer space="small" />

							<IconComponent isRemoved>
								<HiTrash onClick={() => showRemoveModal(country?.code as string, name as string)} />
							</IconComponent>
						</ListItemComponent>
					)
				})}
			</ul>

			<Spacer type="vertical" />
		</>
	)
}
