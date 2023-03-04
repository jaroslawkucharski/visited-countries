import { Heading, Spacer, toastNotify } from '@jaroslaw91/novelui'
import { Select } from 'components'
import { useCountriesListContext } from 'context/CountriesListContext'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { setCountry } from 'services/user'

import { languageDetector } from 'helpers/languageDetector'

export const SelectCountries = () => {
	const { t } = useTranslation()

	const [isLoading, setLoading] = useState(false)

	const { unvisitedList, fetchCountriesList } = useCountriesListContext()

	const options = unvisitedList?.map(country => {
		const name = languageDetector(country?.nameEN, country?.namePL)

		return {
			icon: country?.icon || '',
			name: String(name) || '',
			id: country?.code || '',
		}
	})

	const handleAddCountry = async (country: string) => {
		setLoading(true)

		try {
			const serchedCountry = unvisitedList?.find(
				item => country === item?.nameEN || country === item?.namePL,
			)

			setCountry(serchedCountry?.code as string, serchedCountry?.nameEN as string)

			toastNotify(t('toasts.add.country'), 'success')

			fetchCountriesList()
		} catch {
			toastNotify(t('toasts.error'), 'error')
		} finally {
			setLoading(false)
		}
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
