import { Spacer } from 'components'
import { CountriesListType, useCountriesListContext } from 'context/CountriesListContext'
import { useTranslation } from 'react-i18next'
import { addFavorite, removeCountry, removeFavorite, setCountry, setVisitDate } from 'services/user'
import { modalShow, showCountryModal, toastNotify } from 'utils'

import { languageDetector } from 'helpers/languageDetector'

export const useCountryActions = () => {
	const { t } = useTranslation()
	const { visitedCountries, fetchCountriesList, isFavorite } = useCountriesListContext()

	const runAction = async (action: () => Promise<unknown>, successMessage: string) => {
		try {
			await action()

			toastNotify(t(successMessage), 'success')

			fetchCountriesList()
		} catch {
			toastNotify(t('toasts.error'), 'error')
		}
	}

	const getCountryName = (country?: CountriesListType) =>
		String(languageDetector(country?.nameEN, country?.namePL) || '')

	const getVisitedAt = (code?: string) =>
		visitedCountries.find(({ uid }) => uid === code)?.visitedAt

	const isVisited = (code?: string) => visitedCountries.some(({ uid }) => uid === code)

	const addCountry = (country: CountriesListType, visitedAt: string | null) =>
		runAction(
			() => setCountry(String(country.code), String(country.nameEN), visitedAt),
			'toasts.add.country',
		)

	const deleteCountry = (code: string) =>
		runAction(() => removeCountry(code), 'toasts.remove.country')

	const changeVisitDate = (code: string, visitedAt: string | null) =>
		runAction(() => setVisitDate(code, visitedAt), 'toasts.date.saved')

	const removeFromFavorites = (code: string) =>
		runAction(() => removeFavorite(code), 'toasts.favorite.removed')

	const toggleFavorite = (code: string) =>
		isFavorite(code)
			? removeFromFavorites(code)
			: runAction(() => addFavorite(code), 'toasts.favorite.added')

	const openAddModal = (country?: CountriesListType, withFavorite = false) => {
		if (!country?.code) return

		const { code } = country

		showCountryModal({
			icon: country.icon,
			name: getCountryName(country),
			onConfirm: visitedAt => addCountry(country, visitedAt),
			...(withFavorite && {
				isFavorite: isFavorite(code),
				onToggleFavorite: () => toggleFavorite(code),
			}),
		})
	}

	const openEditModal = (country?: CountriesListType) => {
		if (!country?.code) return

		const { code } = country

		showCountryModal({
			icon: country.icon,
			name: getCountryName(country),
			mode: 'edit',
			initialVisitedAt: getVisitedAt(code) || null,
			onConfirm: visitedAt => changeVisitDate(code, visitedAt),
			onRemove: () => deleteCountry(code),
		})
	}

	const confirmRemoveCountry = (country?: CountriesListType) => {
		if (!country?.code) return

		const { code } = country

		modalShow({
			id: 'remove-country',
			title: t('modal.remove.country'),
			content: (
				<>
					{t('modal.remove.country.content')}

					<Spacer
						type="vertical"
						space="tiny"
					/>

					{`${country.icon} ${getCountryName(country)}`}
				</>
			),
			actionName: t('word.remove'),
			cancelName: t('word.cancel'),
			action: () => deleteCountry(code),
			variant: 'alert',
		})
	}

	return {
		getCountryName,
		getVisitedAt,
		isVisited,
		isFavorite,
		toggleFavorite,
		removeFromFavorites,
		openAddModal,
		openEditModal,
		confirmRemoveCountry,
	}
}
