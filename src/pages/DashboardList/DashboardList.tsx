import { Heading, Layout, Paragraph, Select, Spacer } from 'components'
import { useCountriesListContext } from 'context/CountriesListContext'
import { useTranslation } from 'react-i18next'
import { Countries } from 'store/features/countriesSlice'
import { v4 as uuid } from 'uuid'

import { LOCALES } from 'constants/locales'

export const DashboardList = () => {
	const { t, i18n } = useTranslation()

	const { countries, visitedList } = useCountriesListContext()

	return (
		<Layout>
			<Heading>{t('word.list')}</Heading>
			<Spacer type="vertical" />
			<Select
				options={countries.map(country => {
					const name =
						i18n.language === LOCALES.EN ? country.name.common : country.translations.pol.common

					return {
						icon: country.flag,
						name,
					}
				})}
				hasFullWidth
			/>
			<Spacer type="vertical" />

			<ul>
				{visitedList.map(country => (
					<li key={uuid()}>
						{country?.flag}{' '}
						{i18n.language === LOCALES.EN ? country?.name.common : country?.translations.pol.common}
						<Spacer
							type="vertical"
							space="tiny"
						/>
					</li>
				))}
			</ul>
		</Layout>
	)
}
