import { Button, Heading, Spacer } from '@jaroslaw91/novelui'
import { Select } from 'components'
import { useCountriesListContext } from 'context/CountriesListContext'
import { useTranslation } from 'react-i18next'

import { LOCALES } from 'constants/locales'

export const SelectCountries = () => {
	const { t, i18n } = useTranslation()

	const { countries } = useCountriesListContext()

	return (
		<>
			<Heading>{t('word.list')}</Heading>

			<Spacer type="vertical" />

			<Select
				options={countries.map(country => {
					const name =
						i18n.language === LOCALES.EN ? country.name.common : country.translations.pol.common

					return {
						icon: country.flag,
						name,
						id: country.cca3,
					}
				})}
				hasFullWidth
			/>

			<Spacer type="vertical" />

			<Button hasFullWidth>Add country</Button>
		</>
	)
}
