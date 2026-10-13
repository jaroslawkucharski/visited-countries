import { Heading, Select, Spacer } from 'components'
import { useCountriesListContext } from 'context/CountriesListContext'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { setCountry } from 'services/user'
import { showAddCountryModal, toastNotify } from 'utils'

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

	const addCountry = async (code: string, country: string, visitedAt: string | null) => {
		setLoading(true)

		try {
			await setCountry(code, country, visitedAt)

			toastNotify(t('toasts.add.country'), 'success')

			fetchCountriesList()
		} catch {
			toastNotify(t('toasts.error'), 'error')
		} finally {
			setLoading(false)
		}
	}

	const handleAddCountry = (country: string) => {
		const serchedCountry = unvisitedList?.find(
			item => country === item?.nameEN || country === item?.namePL,
		)

		if (!serchedCountry?.code) {
			return
		}

		showAddCountryModal({
			icon: serchedCountry.icon,
			name: String(languageDetector(serchedCountry.nameEN, serchedCountry.namePL)),
			onConfirm: visitedAt =>
				addCountry(serchedCountry.code as string, serchedCountry.nameEN as string, visitedAt),
		})
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
