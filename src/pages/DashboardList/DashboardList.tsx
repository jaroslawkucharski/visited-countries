import { Heading, Select, Spacer } from 'components'
import { useTranslation } from 'react-i18next'
import { v4 as uuid } from 'uuid'

import { useCountries } from 'hooks/useCountries'

import { LOCALES } from 'constants/locales'

import { ProfileColumnComponent } from './DashboardList.styles'

export const DashboardList = () => {
	const { t, i18n } = useTranslation()
	const { data: countries } = useCountries()

	return (
		<ProfileColumnComponent>
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
				{countries.map(country => (
					<li key={uuid()}>
						{country.flag}

						{i18n.language === LOCALES.EN ? country.name.common : country.translations.pol.common}
					</li>
				))}
			</ul>
		</ProfileColumnComponent>
	)
}
