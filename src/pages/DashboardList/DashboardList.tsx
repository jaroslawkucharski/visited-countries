import { Heading, Select, Spacer } from 'components'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import { v4 as uuid } from 'uuid'

import { LOCALES } from 'constants/locales'

import { ProfileColumnComponent } from './DashboardList.styles'

interface Country {
	name: {
		common: string
	}
	flag: string
	translations: {
		pol: {
			common: string
		}
	}
}

export const DashboardList = () => {
	const { t, i18n } = useTranslation()
	const countries = useSelector<RootState>(state => state.countries.countries) as [Country[]]

	return (
		<ProfileColumnComponent>
			<Heading>{t('word.list')}</Heading>

			<Spacer type="vertical" />

			<Select
				options={countries[0].map((country: Country) => {
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
				{countries[0].map((country: Country) => (
					<li key={uuid()}>
						{country.flag}

						{i18n.language === LOCALES.EN ? country.name.common : country.translations.pol.common}
					</li>
				))}
			</ul>
		</ProfileColumnComponent>
	)
}
