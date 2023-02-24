import { Paragraph, Spacer } from '@jaroslaw91/novelui'
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

	return (
		<>
			<Paragraph size="big">Your visited list:</Paragraph>

			<Spacer
				type="vertical"
				space="tiny"
			/>

			<ul>
				{visitedList.map(country => (
					<ListItemComponent key={uuid()}>
						{`${country?.icon} `}

						{i18n.language === LOCALES.EN ? country?.nameEN : country?.namePL}

						<Spacer space="small" />

						<IconComponent isRemoved>
							<HiTrash onClick={() => handleRemoveCountry(country?.code as string)} />
						</IconComponent>
					</ListItemComponent>
				))}
			</ul>

			<Spacer type="vertical" />
		</>
	)
}
