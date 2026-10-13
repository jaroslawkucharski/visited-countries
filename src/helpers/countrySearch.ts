import { CountriesListType } from 'context/CountriesListContext'

import { LOCALES } from 'constants/locales'

// lower case without diacritics, so "lodz" finds "Łódź" and "osterreich" finds "Österreich"
export const normalizeText = (text = '') =>
	text
		.normalize('NFD')
		.replace(/[̀-ͯ]/g, '')
		.replace(/ł/g, 'l')
		.replace(/Ł/g, 'L')
		.toLowerCase()
		.trim()

// matches the country name in the current language
export const matchesCountry = (
	country: CountriesListType | undefined,
	query: string,
	language: string = LOCALES.PL,
) => {
	const normalizedQuery = normalizeText(query)

	if (!normalizedQuery) return true

	const name = language === LOCALES.EN ? country?.nameEN : country?.namePL

	return normalizeText(name).includes(normalizedQuery)
}
