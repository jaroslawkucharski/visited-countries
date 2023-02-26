import { Heading, Spacer } from '@jaroslaw91/novelui'
import { Select } from 'components'
import { useCountriesListContext } from 'context/CountriesListContext'
import { useTranslation } from 'react-i18next'
import { setCountry } from 'services/user'

import { useService } from 'hooks/useService'

import { LOCALES } from 'constants/locales'

export const SelectCountries = () => {
	const { t, i18n } = useTranslation()

	const { unvisitedList, fetchCountriesList } = useCountriesListContext()

	const options = unvisitedList.map(country => {
		const name = i18n.language === LOCALES.EN ? country?.nameEN : country?.namePL

		return {
			icon: country?.icon || '',
			name: name || '',
			id: country?.code || '',
		}
	})

	const { isLoading, request: addRequest } = useService({
		service: setCountry,
		successToast: t('toasts.add.country'),
	})

	const handleAddCountry = (country: string) => {
		const serchedCountry = unvisitedList?.find(
			item => country === item?.nameEN || country === item?.namePL,
		)

		addRequest(serchedCountry?.code as string, serchedCountry?.nameEN as string)

		fetchCountriesList()
	}

	return (
		<>
			<Heading>{t('word.list')}</Heading>

			<Spacer type="vertical" />

			<Select
				options={options}
				buttonName={t('word.add.country')}
				action={handleAddCountry}
				buttonIsLoading={isLoading}
				hasFullWidth
			/>
		</>
	)
}
